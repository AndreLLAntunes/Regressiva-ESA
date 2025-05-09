import React, { useState, useEffect } from 'react';
import { Quote, RefreshCw } from 'lucide-react';
import { quotes } from '../data/quotes';

const MotivationalQuote: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      changeQuote();
    }, 15000);
    
    return () => clearInterval(interval);
  }, [currentQuote]);

  const changeQuote = () => {
    setAnimate(true);
    setTimeout(() => {
      const currentIndex = quotes.findIndex(q => q.text === currentQuote.text);
      const nextIndex = (currentIndex + 1) % quotes.length;
      setCurrentQuote(quotes[nextIndex]);
      setAnimate(false);
    }, 500);
  };

  return (
    <div className="bg-army-green-dark p-6 rounded-lg border border-brazil-yellow shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold uppercase tracking-wider flex items-center">
          <Quote className="w-5 h-5 mr-2 text-brazil-yellow" />
          Motivação Militar
        </h3>
        <button 
          onClick={changeQuote} 
          className="text-brazil-yellow hover:text-white transition-colors"
          aria-label="Próxima citação"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>
      
      <div className={`transition-opacity duration-500 ${animate ? 'opacity-0' : 'opacity-100'}`}>
        <blockquote className="text-lg italic">
          "{currentQuote.text}"
        </blockquote>
        <p className="text-right mt-2 text-brazil-yellow font-semibold">
          — {currentQuote.author}
        </p>
      </div>
    </div>
  );
};

export default MotivationalQuote;