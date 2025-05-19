import React from 'react';
import { Github, Twitter, Instagram, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-army-green-dark border-t border-brazil-yellow py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-2">
              <Shield className="w-6 h-6 text-brazil-yellow mr-2" />
              <span className="text-xl font-bold tracking-wider uppercase">ESA Countdown</span>
            </div>
            <p className="text-sm text-gray-300 text-center md:text-left">
              Preparação para a Escola de Sargentos das Armas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 md:mb-0">
            <FooterColumn title="Links">
              <FooterLink href="#countdown">Countdown</FooterLink>
              <FooterLink href="#progress">Progresso</FooterLink>
              <FooterLink href="#training">Treinamento</FooterLink>
              <FooterLink href="#dates">Datas</FooterLink>
            </FooterColumn>
            
            <FooterColumn title="Recursos">
              <FooterLink href="#">Guia de Estudo</FooterLink>
              <FooterLink href="#">Simulados</FooterLink>
              <FooterLink href="#">Video Aulas</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
            </FooterColumn>
            
            <FooterColumn title="Informações">
              <FooterLink href="#">Sobre a ESA</FooterLink>
              <FooterLink href="#">Edital</FooterLink>
              <FooterLink href="#">Carreiras</FooterLink>
              <FooterLink href="#">Contato</FooterLink>
            </FooterColumn>
            
            <FooterColumn title="Legal">
              <FooterLink href="#">Termos de Uso</FooterLink>
              <FooterLink href="#">Privacidade</FooterLink>
              <FooterLink href="#">Cookies</FooterLink>
            </FooterColumn>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} ESA Countdown. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-4">
            <SocialLink href="#" icon={<Github className="w-5 h-5" />} label="Github" />
            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => {
  return (
    <div>
      <h4 className="text-brazil-yellow font-semibold mb-3">{title}</h4>
      <ul className="space-y-2">
        {children}
      </ul>
    </div>
  );
};

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-sm text-gray-300 hover:text-brazil-yellow transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
};

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a 
      href={href} 
      className="text-gray-400 hover:text-brazil-yellow transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;