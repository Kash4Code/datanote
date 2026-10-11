import React, { useState } from 'react';
import { CHEATBOOK_ITEMS, CheatItem } from '../utils/cheatbookData';

interface CheatbookDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onInsertSnippet: (code: string) => void;
}

export const CheatbookDrawer: React.FC<CheatbookDrawerProps> = ({
  isOpen,
  onClose,
  onInsertSnippet,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const categories = ['All', 'Markdown', 'Math', 'SQL', 'Python'];

  const filteredItems =
    selectedCategory === 'All'
      ? CHEATBOOK_ITEMS
      : CHEATBOOK_ITEMS.filter((item) => item.category === selectedCategory);

  const handleCopy = (item: CheatItem) => {
    navigator.clipboard.writeText(item.code);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-md bg-gray-900 border-l border-gray-800 h-full flex flex-col shadow-2xl text-gray-100">
        
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-gray-950">
          <div>
            <h2 className="font-bold text-teal-400 text-sm tracking-wider flex items-center space-x-2">
              <span>📖 MEMORY LANE // CHEATBOOK</span>
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">Quick fundamentals & syntax guides</p>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-mono px-2.5 py-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 transition"
          >
            ✕ Esc
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex px-4 py-3 space-x-1.5 border-b border-gray-800 bg-gray-900/50 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-1 rounded-lg font-medium transition ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-black font-semibold'
                  : 'bg-gray-800 text-gray-400 hover:text-gray-200 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Snippets List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-950 border border-gray-800 rounded-xl p-4 space-y-3 hover:border-gray-700 transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-teal-300 bg-teal-950/50 px-2 py-0.5 rounded border border-teal-800/50">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500 font-mono">{item.title}</span>
              </div>

              <p className="text-xs text-gray-300">{item.description}</p>

              {/* Code Snippet Box */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-3 font-mono text-xs text-teal-200 overflow-x-auto whitespace-pre">
                {item.code}
              </div>

              {/* Beginner Tip & Exploration */}
              <div className="space-y-1 text-xs text-gray-400 bg-gray-900/40 p-2.5 rounded-lg border border-gray-800/60">
                <p><strong className="text-gray-300">💡 Tip:</strong> {item.beginnerTip}</p>
                <p className="text-[11px] text-teal-400/80 italic">🔍 {item.exploreMore}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end space-x-2 pt-1">
                <button
                  onClick={() => handleCopy(item)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800 hover:bg-gray-700 text-gray-300 transition"
                >
                  {copiedId === item.id ? '✨ Copied!' : '📋 Copy Snippet'}
                </button>
                <button
                  onClick={() => {
                    onInsertSnippet(`\n\n${item.code}\n\n`);
                    onClose();
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-black transition"
                >
                  Insert into Editor ⚡
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-gray-800 text-center text-xs text-gray-500 font-mono">
          Press ESC to close drawer
        </div>

      </div>
    </div>
  );
};