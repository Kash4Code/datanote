import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import { DevToolsModal } from './components/DevToolsModal';

interface Note {
  id: string;
  title: string;
  content: string;
}

export function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Welcome to DataNote',
      content: `# Welcome to DataNote 🚀\n\nThis is your local-first markdown notebook supporting KaTeX math formulas like $E = mc^2$ and code blocks:\n\n\`\`\`sql\nSELECT * FROM users WHERE active = true;\n\`\`\`\n\nClick the **? Guide** button in the top right to learn more!`,
    },
  ]);
  const [activeNoteId, setActiveNoteId] = useState<string>('1');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const activeNote = notes.find((n) => n.id === activeNoteId) || notes[0];

  const handleContentChange = (newContent: string) => {
    const firstLine = newContent.split('\n')[0].replace('#', '').trim();
    const title = firstLine || 'Untitled Note';

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === activeNoteId ? { ...note, content: newContent, title } : note
      )
    );
  };

  const handleNewNote = () => {
    const newId = Date.now().toString();
    const newNote: Note = {
      id: newId,
      title: 'Untitled Note',
      content: '# Untitled Note\n\nWrite your thoughts here...',
    };
    setNotes([newNote, ...notes]);
    setActiveNoteId(newId);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-950 text-gray-100">
      {/* Sidebar Navigation */}
      <Sidebar
        notes={notes}
        activeNoteId={activeNoteId}
        onSelectNote={setActiveNoteId}
        onNewNote={handleNewNote}
      />

      {/* Main Split Layout: Editor + Preview with Guide Button */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Action Bar */}
        <div className="h-12 bg-gray-900 border-b border-gray-800 px-4 flex items-center justify-between">
          <span className="text-xs font-mono text-gray-400">
            WORKSPACE // <span className="text-teal-400">{activeNote.title}</span>
          </span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-xs bg-gray-800 hover:bg-gray-700 text-teal-300 font-mono px-3 py-1.5 rounded-lg border border-gray-700 transition shadow-sm hover:border-teal-500/50"
          >
            ⚡ Guide & Tutorial
          </button>
        </div>

        {/* Split Editor / Preview Area */}
        <div className="flex-1 grid grid-cols-2 h-full overflow-hidden">
          <Editor content={activeNote ? activeNote.content : ''} onChange={handleContentChange} />
          <Preview content={activeNote ? activeNote.content : ''} />
        </div>
      </main>

      {/* Onboarding & Tutorial Modal */}
      <DevToolsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;