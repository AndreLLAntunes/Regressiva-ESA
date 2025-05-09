import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Shield, Calendar, Medal, Award } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const CountdownContainer: React.FC = () => {
  const { timeRemaining, examDate } = useAppContext();
  const formattedDate = format(examDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <div id="countdown" className="relative">
      <div className="flex justify-center mb-6 animate-pulse-slow">
        <img 
          src="escolaLogo2.png"
          alt="ESA Logo" 
          className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
        />
      </div>
      
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest mb-2 flex items-center justify-center">
          <Calendar className="w-8 h-8 mr-2 text-brazil-yellow" />
          <span>Faltam</span>
        </h2>
        
        <div className="relative">
          <div className="flex justify-center items-center">
            <TimeBlock value={timeRemaining.days} label="dias" primary />
            <TimeBlock value={timeRemaining.hours} label="horas" />
            <TimeBlock value={timeRemaining.minutes} label="minutos" />
            <TimeBlock value={timeRemaining.seconds} label="segundos" />
          </div>
        </div>
        
        <p className="text-lg sm:text-xl mt-6 italic text-gray-100">
          para a prova da ESA - {formattedDate}
        </p>
        
        <div className="mt-6 p-4 bg-army-green-dark bg-opacity-50 border border-brazil-yellow rounded-lg max-w-2xl mx-auto">
          <p className="text-xl font-semibold flex items-center justify-center">
            <Medal className="w-5 h-5 mr-2 text-brazil-yellow" />
            "A ESA te espera. Vai com tudo!"
          </p>
        </div>

        <div className="mt-6 text-sm text-gray-300">
          <p>Inscrições: 31 de março a 18 de maio de 2025</p>
          <p>Taxa: R$ 95,00</p>
          <p>Vagas: 1.125 (Geral/Aviação, Saúde e Música)</p>
        </div>
      </div>

      <div className="absolute top-0 left-0 hidden md:block">
        <Award className="w-16 h-16 text-brazil-yellow opacity-30" />
      </div>
      <div className="absolute top-0 right-0 hidden md:block">
        <Award className="w-16 h-16 text-brazil-yellow opacity-30" />
      </div>
    </div>
  );
};

type TimeBlockProps = {
  value: number;
  label: string;
  primary?: boolean;
};

const TimeBlock: React.FC<TimeBlockProps> = ({ value, label, primary }) => {
  return (
    <div className={`flex flex-col items-center justify-center mx-2 sm:mx-3 ${primary ? 'scale-125' : ''}`}>
      <div className={`
        w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
        ${primary ? 'bg-brazil-blue' : 'bg-army-green-dark'} 
        rounded-lg border-2 border-brazil-yellow shadow-lg
        flex items-center justify-center 
        transition-all duration-500
      `}>
        <span className={`
          text-2xl sm:text-3xl md:text-4xl font-bold
          ${primary ? 'text-white' : 'text-gray-200'}
        `}>
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs sm:text-sm mt-2 uppercase tracking-wider text-gray-200">{label}</span>
    </div>
  );
};

export default CountdownContainer;