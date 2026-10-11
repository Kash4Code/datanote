import React from 'react';

interface DevToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DevToolsModal: React.FC<DevToolsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl text-gray-200">
        <div className="flex items-center justify-between pb-4 border-b border-gray-800">
          <h3 className="text-lg font-bold text-teal-400 flex items-center space-x-2">
            <span>⚡ Welcome to DataNote Guide</span>
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-sm font-mono px-2 py-1 rounded bg-gray-800 hover:bg-gray-700 transition"
          >
            ✕ Close
          </button>
        </div>

        <div className="py-4 space-y-4 text-sm text-gray-300">
          <div className="space-y-1">
            <h4 className="font-semibold text-teal-300">📝 Markdown Support</h4>
            <p className="text-xs text-gray-400">Use standard Markdown for headings, bold text, lists, and links.</p>
          </div>

          <div className="space-y-1">
            <h4 className="font-semibold text-teal-300">📐 KaTeX Math Formulas</h4>
            <p className="text-xs text-gray-400">Render inline math like <code className="text-teal-400">$E = mc^2$</code> or block equations seamlessly.</p>
          </div>

          <div className="space-y-1">
            <h4 className="font-semibold text-teal-300">💻 Code & Data Blocks</h4>
            <p className="text-xs text-gray-400">Write SQL or Python code inside standard fenced code blocks for instant execution styling.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-teal-600 hover:bg-teal-500 text-black font-semibold px-4 py-2 rounded-lg text-xs transition"
          >
            Got it, let's write!
          </button>
        </div>
      </div>
    </div>
  );
};