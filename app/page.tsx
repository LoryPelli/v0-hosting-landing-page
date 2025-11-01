'use client';

import { Hero } from '@/components/hero';
import { Values } from '@/components/values';
import { Vision } from '@/components/vision';
import { Services } from '@/components/services';
import { Header } from '@/components/header';
import { DisclaimerPopup } from '@/components/disclaimer-popup';
import { StickyBanner } from '@/components/sticky-banner';
import { ContactModal } from '@/components/contact-modal';
import { useState } from 'react';

export default function Home() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [showContact, setShowContact] = useState(false);

  const handleOpenDisclaimer = () => setShowDisclaimer(true);
  const handleOpenContact = () => setShowContact(true);

  return (
    <div className='min-h-screen'>
      <DisclaimerPopup isOpen={showDisclaimer} onClose={() => setShowDisclaimer(false)} />
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
      <StickyBanner />
      <Header />
      <main>
        <Hero onContactClick={handleOpenContact} onDisclaimerClick={handleOpenDisclaimer} />
        <Values />
        <Vision />
        <Services onContactClick={handleOpenContact} />
      </main>
    </div>
  );
}
