import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { LoginPage } from './components/LoginPage';
import { OfferValidator } from './components/OfferValidator';
import { APSTracker } from './components/APSTracker';
import { VideoKYC } from './components/VideoKYC';
import { AnmeldungAssistant } from './components/AnmeldungAssistant';
import { UniversityFinder } from './components/UniversityFinder';
import { HousingAgent } from './components/HousingAgent';
import { LiveTranslator } from './components/LiveTranslator';
import { AppStep } from './types';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userPassportLast4, setUserPassportLast4] = useState('');
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.FIND_UNI);

  const handleLogin = (email: string, passportLast4: string) => {
    setUserPassportLast4(passportLast4);
    setIsAuthenticated(true);
  };

  const renderContent = () => {
    switch (currentStep) {
      case AppStep.FIND_UNI:
        return <UniversityFinder onNext={() => setCurrentStep(AppStep.VALIDATION)} />;
      case AppStep.VALIDATION:
        return <OfferValidator passportLast4={userPassportLast4} onSuccess={() => setCurrentStep(AppStep.APS_VISA)} />;
      case AppStep.APS_VISA:
        return <APSTracker passportLast4={userPassportLast4} onComplete={() => setCurrentStep(AppStep.HOUSING)} />;
      case AppStep.HOUSING:
        return <HousingAgent />;
      case AppStep.LIVE_AGENT:
        return <LiveTranslator />;
      case AppStep.VIDEO_KYC:
        return <VideoKYC passportLast4={userPassportLast4} onSuccess={() => setCurrentStep(AppStep.ANMELDUNG)} />;
      case AppStep.ANMELDUNG:
        return <AnmeldungAssistant passportLast4={userPassportLast4} />;
      default:
        return <UniversityFinder onNext={() => setCurrentStep(AppStep.VALIDATION)} />;
    }
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Layout currentStep={currentStep} setStep={setCurrentStep}>
      {renderContent()}
    </Layout>
  );
}

export default App;