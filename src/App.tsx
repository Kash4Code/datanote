import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';

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
      content: `# Welcome to DataNote 🚀\n\nThis is your local-first markdown notebook supporting KaTeX math formulas like $E = mc^2$ and code blocks:\n\n\`\`\`sql\nSELECT * FROM users WHERE active = true;\n\`\`\`\n\nStart typing on the left or create a new document!`,
    },
  ]);
  const [activeNoteId, setActiveNoteId] = useState<string>('1');

  // Find active note
  const activeNote = notes.find((n) => n.id === activeNoteId) || notes[0];

  // Handle note content change
  const handleContentChange = (newContent: string) => {
    // Automatically derive a title from the first line if it starts with '#'
    const firstLine = newContent.split('\n')[0].replace('#', '').trim();
    const title = firstLine || 'Untitled Note';

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === activeNoteId ? { ...note, content: newContent, title } : note
      )
    );
  };

  // Handle creating a new note
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

      {/* Main Split Layout: Editor + Preview */}
      <main className="flex-1 grid grid-cols-2 h-full overflow-hidden">
        <Editor content={activeNote ? activeNote.content : ''} onChange={handleContentChange} />
        <Preview content={activeNote ? activeNote.content : ''} />
      </main>
    </div>
  );
}

export default App;