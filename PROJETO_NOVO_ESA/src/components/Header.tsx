import React from 'react';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-army-green-dark py-4 border-b-2 border-brazil-yellow shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-brazil-yellow" />
          <h1 className="text-xl md:text-2xl font-bold tracking-wider uppercase">
            Preparação ESA
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="#countdown">Countdown</NavLink>
          <NavLink href="#progress">Progresso</NavLink>
          <NavLink href="#training">Treinamento</NavLink>
          <NavLink href="#dates">Datas</NavLink>
        </div>
       
      </div>
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="text-white hover:text-brazil-yellow transition-colors duration-200 uppercase tracking-wide text-sm font-semibold"
    >
      {children}
    </a>
  );
};

export default Header;