import React from 'react';

interface CommandDeckProps {
  onOpenCheatbook: () => void;
  onOpenGuide: () => void;
  onFormatNote: () => void;
  activeTitle: string;
}

export const CommandDeck: React.FC<CommandDeckProps> = ({
  onOpenCheatbook,
  onOpenGuide,
  onFormatNote,
  activeTitle,
}) => {
  return (
    <header className="h-14 bg-gray-900 border-b border-gray-800 px-4 flex items-center justify-between select-none">
      {/* Left: Workspace Title & Status */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse"></span>
          <span className="text-xs font-mono text-gray-400">COMMAND DECK //</span>
        </div>
        <span className="text-xs font-semibold text-teal-300 max-w-[200px] truncate">
          {activeTitle}
        </span>
      </div>

      {/* Center / Right: Quick-Action Command Buttons with Keyboard Hints */}
      <div className="flex items-center space-x-2">
        {/* Formatter Button */}
        <button
          onClick={onFormatNote}
          title="Tidy up markdown & code blocks"
          className="flex items-center space-x-1.5 text-xs bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-1.5 rounded-lg border border-gray-700 transition"
        >
          <span>✨ Auto-Format</span>
        </button>

        {/* Cheatbook Button */}
        <button
          onClick={onOpenCheatbook}
          title="Open Formula Book & Syntax Cheatsheet"
          className="flex items-center space-x-1.5 text-xs bg-gray-800 hover:bg-gray-700 text-teal-300 px-3 py-1.5 rounded-lg border border-gray-700 hover:border-teal-500/50 transition font-mono"
        >
          <span>📖 Cheatbook</span>
          <span className="text-[10px] text-gray-400 bg-gray-900 px-1.5 py-0.5 rounded border border-gray-800">Ctrl+B</span>
        </button>

        {/* Guide / Tutorial Button */}
        <button
          onClick={onOpenGuide}
          title="Quick Start Guide & Onboarding"
          className="flex items-center space-x-1.5 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-700 transition font-mono"
        >
          <span>⚡ Guide</span>
        </button>
      </div>
    </header>
  );
};