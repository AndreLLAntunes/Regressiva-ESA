import React from 'react';
import Header from './components/Header';
import CountdownContainer from './components/CountdownContainer';
import MotivationalQuote from './components/MotivationalQuote';
import StudyTracker from './components/StudyTracker';
import TrainingRegimen from './components/TrainingRegimen';
import ImportantDates from './components/ImportantDates';
import Footer from './components/Footer';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-b from-army-green-light via-army-green to-army-green-dark font-military text-white">
        <Header />
        <main className="container mx-auto px-4 py-8 space-y-8">
          <CountdownContainer />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MotivationalQuote />
            <StudyTracker />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TrainingRegimen />
            <ImportantDates />
          </div>
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;