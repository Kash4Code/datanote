import React from 'react';

interface SidebarProps {
  notes: { id: string; title: string }[];
  activeNoteId: string;
  onSelectNote: (id: string) => void;
  onNewNote: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  notes,
  activeNoteId,
  onSelectNote,
  onNewNote,
}) => {
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col h-screen select-none">
      {/* App Header */}
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
          <span className="font-bold text-gray-100 tracking-wider text-sm">DATANOTE</span>
        </div>
        <span className="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-400 font-mono">v0.1</span>
      </div>

      {/* New Note Action */}
      <div className="p-3">
        <button
          onClick={onNewNote}
          className="w-full bg-teal-600 hover:bg-teal-500 text-black font-semibold py-2 px-3 rounded-lg text-sm transition-all duration-150 flex items-center justify-center space-x-2 shadow-lg shadow-teal-900/20"
        >
          <span>+ New Document</span>
        </button>
      </div>

      {/* Notes Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
        <div className="text-xs font-semibold text-gray-500 uppercase px-2 mb-2 tracking-wider">
          Documents
        </div>
        {notes.length === 0 ? (
          <div className="text-xs text-gray-500 px-2 italic">No notes yet. Create one!</div>
        ) : (
          notes.map((note) => {
            const isActive = note.id === activeNoteId;
            return (
              <button
                key={note.id}
                onClick={() => onSelectNote(note.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between group ${
                  isActive
                    ? 'bg-gray-800 text-teal-400 font-medium border-l-2 border-teal-500'
                    : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
                }`}
              >
                <span className="truncate">{note.title || 'Untitled Note'}</span>
              </button>
            );
          })
        )}
      </div>

      {/* Footer Info */}
      <div className="p-4 border-t border-gray-800 text-xs text-gray-500 flex items-center justify-between">
        <span>Local-First & Private</span>
        <span className="font-mono text-gray-600">Markdown + SQL</span>
      </div>
    </aside>
  );
};