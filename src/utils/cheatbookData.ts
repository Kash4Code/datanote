export interface CheatItem {
  id: string;
  title: string;
  category: 'Math' | 'SQL' | 'Python' | 'Markdown';
  code: string;
  description: string;
  beginnerTip: string;
  exploreMore: string;
}

export const CHEATBOOK_ITEMS: CheatItem[] = [
  {
    id: '1',
    title: 'Markdown Basics & Callouts',
    category: 'Markdown',
    code: '# Heading 1\n## Heading 2\n\n- Bullet point one\n- Bullet point two\n\n> 💡 **Tip:** Use blockquotes for highlighting key takeaways.',
    description: 'Fundamental structural elements for clean documentation.',
    beginnerTip: 'Keep your notes modular by breaking topics down with Heading 2 tags.',
    exploreMore: 'Search for "GitHub Flavored Markdown spec" for task lists and tables.',
  },
  {
    id: '2',
    title: 'KaTeX Fractions & Math',
    category: 'Math',
    code: 'Inline math: $f(x) = x^2 + 2x + 1$\n\nBlock equation:\n$$\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$',
    description: 'Render mathematical formulas and quadratic equations seamlessly.',
    beginnerTip: 'Use single dollar signs `$...$` for inline variables and double `$$...$$` for centered display blocks.',
    exploreMore: 'Search for "KaTeX supported functions" for matrices, Greek letters, and calculus symbols.',
  },
  {
    id: '3',
    title: 'SQL Fundamentals (SELECT & JOIN)',
    category: 'SQL',
    code: 'SELECT \n  users.name,\n  orders.total_amount\nFROM users\nJOIN orders ON users.id = orders.user_id\nWHERE orders.status = "completed"\nLIMIT 10;',
    description: 'Retrieve and filter relational data across multiple tables.',
    beginnerTip: 'Always alias your tables (e.g., `FROM users AS u`) when writing multi-table joins for readability.',
    exploreMore: 'Search for "SQL Window Functions (RANK, ROW_NUMBER)" and "Common Table Expressions (CTEs)".',
  },
  {
    id: '4',
    title: 'Python Functions & Data Parsing',
    category: 'Python',
    code: 'def parse_metrics(data: list[float]) -> float:\n    """Calculate average metric score."""\n    if not data:\n        return 0.0\n    return sum(data) / len(data)\n\n# Example usage\nprint(parse_metrics([88.5, 92.0, 95.5]))',
    description: 'Core syntax for clean type-hinted functions and logic.',
    beginnerTip: 'Use Python type hints (`-> float`) to make your script notes self-documenting.',
    exploreMore: 'Search for "Python Pandas vectorization" and "Async/Await concurrency patterns".',
  },
];