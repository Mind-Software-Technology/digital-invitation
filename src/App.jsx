import { useState, useCallback } from 'react';
import { weddingConfig } from './data/weddingConfig';
import { useAudioPlayer } from './hooks/useAudioPlayer';

// Components
import CoverPage from './components/CoverPage';
import OpeningDoa from './components/OpeningDoa';
import CoupleProfile from './components/CoupleProfile';
import EventDetails from './components/EventDetails';
import CountdownTimer from './components/CountdownTimer';
import LocationMap from './components/LocationMap';
import WeddingGift from './components/WeddingGift';
import PhotoGallery from './components/PhotoGallery';
import WishesSection from './components/WishesSection';
import ClosingSection from './components/ClosingSection';
import AudioPlayer from './components/AudioPlayer';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [coverClosing, setCoverClosing] = useState(false);
  const { isPlaying, toggle, play } = useAudioPlayer(weddingConfig.music.src);

  const handleOpen = useCallback(() => {
    setCoverClosing(true);
    play(); // Start background music

    // Wait for cover animation to finish, then remove it
    setTimeout(() => {
      setIsOpen(true);
      setCoverClosing(false);
    }, 800);
  }, [play]);

  return (
    <div className="app">
      {/* Cover Page — shown until user clicks "Buka Undangan" */}
      {!isOpen && (
        <CoverPage
          onOpen={handleOpen}
          isClosing={coverClosing}
        />
      )}

      {/* Main Invitation Content */}
      <div className={`invitation-content ${!isOpen ? 'hidden' : ''}`}>
        <OpeningDoa />
        <CoupleProfile />
        <EventDetails />
        <CountdownTimer />
        <LocationMap />
        <WeddingGift />
        <PhotoGallery />
        <WishesSection />
        <ClosingSection />
      </div>

      {/* Floating Audio Player — always visible after opening */}
      {isOpen && (
        <AudioPlayer isPlaying={isPlaying} onToggle={toggle} />
      )}
    </div>
  );
}

export default App;
