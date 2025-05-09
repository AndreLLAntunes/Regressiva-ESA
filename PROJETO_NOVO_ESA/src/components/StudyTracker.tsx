import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { BookOpen, Target, BarChart3 } from 'lucide-react';

const StudyTracker: React.FC = () => {
  const { progress, updateProgress, studyGoal, updateStudyGoal } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [tempGoal, setTempGoal] = useState(studyGoal);
  
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= studyGoal) {
      updateProgress(value);
    }
  };
  
  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setTempGoal(value);
    }
  };
  
  const saveGoal = () => {
    updateStudyGoal(tempGoal);
    setIsEditing(false);
  };

  const percentComplete = Math.round((progress / studyGoal) * 100);
  
  return (
    <div id="progress" className="bg-army-green-dark p-6 rounded-lg border border-brazil-yellow shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold uppercase tracking-wider flex items-center">
          <BookOpen className="w-5 h-5 mr-2 text-brazil-yellow" />
          Progresso dos Estudos
        </h3>
        <div className="flex items-center">
          <BarChart3 className="w-5 h-5 mr-1 text-brazil-yellow" />
          <span className="text-sm font-medium">{percentComplete}% Completo</span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-brazil-yellow to-brazil-green"
            style={{ width: `${percentComplete}%`, transition: 'width 0.5s ease-in-out' }}
          ></div>
        </div>
      </div>
      
      <div className="flex flex-col space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Matérias estudadas</label>
          <div className="flex items-center">
            <input 
              type="range" 
              min="0" 
              max={studyGoal} 
              value={progress}
              onChange={handleProgressChange}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <span className="ml-2 min-w-12 text-center">{progress}/{studyGoal}</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-sm text-gray-300">Meta de estudos</label>
            {!isEditing ? (
              <button 
                onClick={() => setIsEditing(true)}
                className="text-xs text-brazil-yellow hover:underline"
              >
                Editar
              </button>
            ) : (
              <button 
                onClick={saveGoal}
                className="text-xs text-brazil-green hover:underline"
              >
                Salvar
              </button>
            )}
          </div>
          
          {isEditing ? (
            <div className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-brazil-yellow" />
              <input 
                type="number" 
                min="1"
                value={tempGoal}
                onChange={handleGoalChange}
                className="bg-army-green border border-gray-600 rounded px-2 py-1 text-white w-20"
              />
              <span className="ml-2 text-sm text-gray-300">matérias</span>
            </div>
          ) : (
            <div className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-brazil-yellow" />
              <span>{studyGoal} matérias</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyTracker;