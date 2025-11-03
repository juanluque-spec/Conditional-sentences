// A central place to manage sound effects for the application.

// Using royalty-free sounds from a reliable CDN.
export const SOUND_URLS = {
  CORRECT: 'https://cdn.pixabay.com/audio/2022/03/15/audio_163a79157c.mp3', // A simple, positive chime
  INCORRECT: 'https://cdn.pixabay.com/audio/2022/03/10/audio_89c1229873.mp3', // A soft, incorrect buzz
  CLICK: 'https://cdn.pixabay.com/audio/2022/03/15/audio_76795632b8.mp3' // A subtle UI click
};

// A Map to cache the Audio objects to avoid re-creating them on every play.
const audioCache = new Map<string, HTMLAudioElement>();

/**
 * Plays a sound from a given URL.
 * @param soundUrl The URL of the sound file to play.
 */
export const playSound = (soundUrl: string) => {
  try {
    let audio = audioCache.get(soundUrl);
    if (!audio) {
      audio = new Audio(soundUrl);
      audioCache.set(soundUrl, audio);
    }
    // Rewind to the start in case it's already playing or has finished.
    // This allows the sound to be played again quickly.
    audio.currentTime = 0;
    audio.play().catch(error => {
      // Autoplay can be blocked by browsers if the user hasn't interacted with the page yet.
      // We log this as a warning but don't crash the application.
      console.warn(`Could not play sound: ${soundUrl}`, error);
    });
  } catch (error) {
    console.error("Error playing sound:", error);
  }
};
