import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Dumbbell, Brain, ChevronDown, ChevronUp } from 'lucide-react';

const TrainingRegimen: React.FC = () => {
  const { timeRemaining } = useAppContext();
  const [expandedSection, setExpandedSection] = useState<string | null>("physical");
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div id="training" className="bg-army-green-dark p-6 rounded-lg border border-brazil-yellow shadow-lg">
      <h3 className="text-lg font-bold uppercase tracking-wider flex items-center mb-4">
        <Dumbbell className="w-5 h-5 mr-2 text-brazil-yellow" />
        Regimento de Treinamento
      </h3>
      
      <div className="divide-y divide-gray-700">
        <TrainingSection
          title="Treinamento Físico"
          icon={<Dumbbell className="w-5 h-5 text-brazil-yellow" />}
          isExpanded={expandedSection === "physical"}
          onToggle={() => toggleSection("physical")}
        >
          <div className="space-y-2">
            <TrainingItem
              days={timeRemaining.days}
              title="Corrida"
              recommended={timeRemaining.days > 90 ? "3x por semana - 3km" : "4x por semana - 5km"}
            />
            <TrainingItem
              days={timeRemaining.days}
              title="Flexões"
              recommended={timeRemaining.days > 90 ? "20 repetições - 3 séries" : "30 repetições - 4 séries"}
            />
            <TrainingItem
              days={timeRemaining.days}
              title="Abdominais"
              recommended={timeRemaining.days > 90 ? "25 repetições - 3 séries" : "40 repetições - 4 séries"}
            />
            <TrainingItem
              days={timeRemaining.days}
              title="Barra Fixa"
              recommended={timeRemaining.days > 90 ? "5 repetições - 3 séries" : "10 repetições - 3 séries"}
            />
          </div>
        </TrainingSection>
        
        <TrainingSection
          title="Estudo Matemática"
          icon={<Brain className="w-5 h-5 text-brazil-yellow" />}
          isExpanded={expandedSection === "math"}
          onToggle={() => toggleSection("math")}
        >
          <div className="space-y-2">
            <TrainingItem
              days={timeRemaining.days}
              title="Álgebra"
              recommended={timeRemaining.days > 90 ? "1 hora diária" : "2 horas diárias"}
            />
            <TrainingItem
              days={timeRemaining.days}
              title="Geometria"
              recommended={timeRemaining.days > 90 ? "1 hora diária" : "1.5 horas diárias"}
            />
            <TrainingItem
              days={timeRemaining.days}
              title="Trigonometria"
              recommended={timeRemaining.days > 60 ? "30 min diários" : "1 hora diária"}
            />
          </div>
        </TrainingSection>
        
        <TrainingSection
          title="Estudo Português"
          icon={<Brain className="w-5 h-5 text-brazil-yellow" />}
          isExpanded={expandedSection === "portuguese"}
          onToggle={() => toggleSection("portuguese")}
        >
          <div className="space-y-2">
            <TrainingItem
              days={timeRemaining.days}
              title="Gramática"
              recommended={timeRemaining.days > 90 ? "1 hora diária" : "1.5 horas diárias"}
            />
            <TrainingItem
              days={timeRemaining.days}
              title="Interpretação de Texto"
              recommended={timeRemaining.days > 90 ? "30 min diários" : "1 hora diária"}
            />
            <TrainingItem
              days={timeRemaining.days}
              title="Redação"
              recommended="1 redação semanal"
            />
          </div>
        </TrainingSection>
      </div>
    </div>
  );
};

type TrainingSectionProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

const TrainingSection: React.FC<TrainingSectionProps> = ({ 
  title, icon, children, isExpanded, onToggle 
}) => {
  return (
    <div className="py-3">
      <button 
        className="w-full flex items-center justify-between"
        onClick={onToggle}
      >
        <div className="flex items-center">
          {icon}
          <span className="ml-2 font-semibold">{title}</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-brazil-yellow" />
        ) : (
          <ChevronDown className="w-5 h-5 text-brazil-yellow" />
        )}
      </button>
      
      {isExpanded && (
        <div className="mt-3 pl-7">
          {children}
        </div>
      )}
    </div>
  );
};

type TrainingItemProps = {
  days: number;
  title: string;
  recommended: string;
}

const TrainingItem: React.FC<TrainingItemProps> = ({ days, title, recommended }) => {
  let urgencyClass = "text-green-400";
  
  if (days < 30) {
    urgencyClass = "text-red-400 font-bold";
  } else if (days < 60) {
    urgencyClass = "text-yellow-400";
  }
  
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm">{title}</span>
      <span className={`text-sm ${urgencyClass}`}>{recommended}</span>
    </div>
  );
};

export default TrainingRegimen;