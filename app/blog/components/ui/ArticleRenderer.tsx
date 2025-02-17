'use client'

import React from 'react';
import { Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from 'next-themes';
import FloatingNav from '@/app/components/FloatingNav';

type ArticleProps = {
  title: string;
  content: string;
  readingTime?: string;
};

const ArticleRenderer = ({ title, content, readingTime }: ArticleProps) => {
  const { theme } = useTheme();
  
  // Function to process markdown headings and content
  const processContent = (text: string) => {
    const sections = text.split('\n');
    
    return sections.map((section, index) => {
      // Process headings
      if (section.startsWith('# ')) {
        return <h1 key={index} className="text-4xl font-bold mt-8 mb-6">{section.replace('# ', '')}</h1>;
      }
      if (section.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold mt-6 mb-4">{section.replace('## ', '')}</h2>;
      }
      if (section.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-4 mb-3">{section.replace('### ', '')}</h3>;
      }
      
      // Process horizontal rules
      if (section.startsWith('---')) {
        return <hr key={index} className="my-8 border-t border-gray-200" />;
      }
      
      // Process italics
      if (section.startsWith('*') && section.endsWith('*')) {
        return (
          <p key={index} className="text-gray-600 italic my-2">
            {section.replace(/^\*|\*$/g, '')}
          </p>
        );
      }
      
      // Regular paragraphs
      if (section.trim()) {
        return <p key={index} className="my-4 leading-relaxed">{section}</p>;
      }
      
      return null;
    });
  };

  return (
    <Card className={`max-w-4xl mx-auto my-8 ${
      theme === 'dark' 
        ? 'bg-gray-900 shadow-lg shadow-gray-800/50' 
        : 'bg-white shadow-lg'
    }`}>
      <CardContent className="p-8 pt-[15vh]">
        {/* Article Header */}
        <header className={`mb-8 border-b ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        } pb-6`}>
          <h1 className={`text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
          }`}>{title}</h1>
          {readingTime && (
            <div className={`flex items-center ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">{readingTime}</span>
            </div>
          )}
        </header>

        {/* Article Content */}
        <article className={`prose lg:prose-lg ${
          theme === 'dark' 
            ? 'prose-invert' 
            : 'prose-gray'
        }`}>
          {processContent(content)}
        </article>
      </CardContent>
      <FloatingNav />
    </Card>
  );
};

export default ArticleRenderer; 