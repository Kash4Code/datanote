import React from 'react';

interface EditorProps {
  content: string;
  onChange: (value: string) => void;
}

export const Editor: React.FC<EditorProps> = ({ content, onChange }) => {
  return (
    <div className="flex flex-col h-full bg-gray-950 border-r border-gray-800">
      {/* Editor Header Bar */}
      <div className="px-4 py-2.5 bg-gray-900 border-b border-gray-800 flex items-center justify-between text-xs text-gray-400 font-mono">
        <span>EDITOR // MARKDOWN + MATH + SQL</span>
        <span className="text-teal-400">Live Sync Enabled</span>
      </div>

      {/* Textarea Input */}
      <div className="flex-1 relative">
        <textarea
          value={content}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Start writing markdown, formulas ($x^2$), or code blocks..."
          className="w-full h-full bg-transparent text-gray-200 p-4 font-mono text-sm resize-none focus:outline-none leading-relaxed selection:bg-teal-500 selection:text-black"
          spellCheck={false}
        />
      </div>
    </div>
  );
};