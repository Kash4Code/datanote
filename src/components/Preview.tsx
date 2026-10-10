import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface PreviewProps {
  content: string;
}

export const Preview: React.FC<PreviewProps> = ({ content }) => {
  return (
    <div className="flex flex-col h-full bg-gray-950 overflow-y-auto">
      {/* Preview Header Bar */}
      <div className="px-4 py-2.5 bg-gray-900 border-b border-gray-800 flex items-center justify-between text-xs text-gray-400 font-mono sticky top-0 z-10">
        <span>PREVIEW // RENDERED OUTPUT</span>
        <span className="text-teal-400">KaTeX + Markdown Active</span>
      </div>

      {/* Rendered Output Area */}
      <div className="p-6 max-w-none prose prose-invert text-gray-200">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            code({ node, inline, className, children, ...props }: any) {
              return !inline ? (
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 my-3 overflow-x-auto font-mono text-sm text-teal-300">
                  <code>{children}</code>
                </div>
              ) : (
                <code className="bg-gray-900 text-teal-300 px-1.5 py-0.5 rounded text-xs font-mono" {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content || '*Nothing to preview yet. Start typing on the left!*'}
        </ReactMarkdown>
      </div>
    </div>
  );
};