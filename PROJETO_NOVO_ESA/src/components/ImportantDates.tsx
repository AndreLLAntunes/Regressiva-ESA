import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const ImportantDates: React.FC = () => {
  const dates = [
    {
      title: "Inscrições ESA",
      startDate: new Date(2025, 2, 31), // March 31, 2025
      endDate: new Date(2025, 4, 18), // May 18, 2025
      description: "Período de inscrições - Taxa: R$ 95,00"
    },
    {
      title: "Pedidos de Isenção",
      startDate: new Date(2025, 2, 31), // March 31, 2025
      endDate: new Date(2025, 3, 4), // April 4, 2025
      description: "Período para solicitar isenção da taxa"
    },
    {
      title: "Prova Intelectual",
      date: new Date(2025, 8, 28), // September 28, 2025
      description: "Exame Intelectual - Principal etapa do concurso"
    },
    {
      title: "Exame de Habilitação Musical",
      startDate: new Date(2025, 11, 15), // December 15, 2025
      endDate: new Date(2025, 11, 24), // December 24, 2025
      description: "Para candidatos da área de Música"
    }
  ];

  return (
    <div id="dates" className="bg-army-green-dark p-6 rounded-lg border border-brazil-yellow shadow-lg">
      <h3 className="text-lg font-bold uppercase tracking-wider flex items-center mb-4">
        <Calendar className="w-5 h-5 mr-2 text-brazil-yellow" />
        Datas Importantes
      </h3>
      
      <div className="space-y-4">
        {dates.map((item, index) => (
          <DateItem
            key={index}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            date={item.date}
            description={item.description}
            isPast={new Date() > (item.date || item.endDate || item.startDate)}
          />
        ))}
      </div>

      <div className="mt-6 p-4 bg-army-green-light rounded-lg">
        <h4 className="font-semibold text-brazil-yellow mb-2">Informações Gerais</h4>
        <ul className="space-y-2 text-sm">
          <li>• Vagas: 1.125 (1015 Geral/Aviação, 80 Saúde, 30 Música)</li>
          <li>• Idade: 17-24 anos (Geral/Aviação) | 17-26 anos (Música/Saúde)</li>
          <li>• Bolsa durante curso: R$ 1.150,00</li>
          <li>• Soldo após formação: R$ 3.825,00</li>
          <li>• Altura mínima: 1,60m (masculino) | 1,55m (feminino)</li>
        </ul>
      </div>
    </div>
  );
};

type DateItemProps = {
  title: string;
  startDate?: Date;
  endDate?: Date;
  date?: Date;
  description: string;
  isPast: boolean;
}

const DateItem: React.FC<DateItemProps> = ({ title, startDate, endDate, date, description, isPast }) => {
  const formatDate = (date: Date) => {
    return format(date, "dd 'de' MMMM", { locale: ptBR });
  };
  
  const getDateDisplay = () => {
    if (date) {
      return formatDate(date);
    }
    if (startDate && endDate) {
      return `${formatDate(startDate)} até ${formatDate(endDate)}`;
    }
    return '';
  };
  
  return (
    <div className={`
      p-3 rounded border
      ${isPast ? 'border-gray-600 opacity-70' : 'border-brazil-yellow'}
      transition-all duration-300
    `}>
      <div className="flex items-center justify-between">
        <span className="font-medium">{title}</span>
        <div className={`px-2 py-1 rounded-full text-xs ${isPast ? 'bg-gray-700' : 'bg-brazil-blue'}`}>
          {isPast ? 'Passado' : 'Futuro'}
        </div>
      </div>
      
      <div className="flex items-center mt-2 text-sm">
        <Clock className="w-4 h-4 mr-1 text-brazil-yellow" />
        <span>{getDateDisplay()}</span>
      </div>
      
      <p className="text-sm text-gray-300 mt-1">{description}</p>
    </div>
  );
};

export default ImportantDates;