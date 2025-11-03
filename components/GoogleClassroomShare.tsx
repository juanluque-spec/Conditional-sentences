import React, { useEffect, useRef } from 'react';

interface GoogleClassroomShareProps {
  totalPoints: number;
}

const GoogleClassroomShare: React.FC<GoogleClassroomShareProps> = ({ totalPoints }) => {
  const shareButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use a slight delay to ensure the Google API script has loaded and is ready.
    const timer = setTimeout(() => {
      if (window.gapi && window.gapi.sharetoclassroom && shareButtonRef.current) {
        // Clear any previous button to prevent duplicates on re-render
        if(shareButtonRef.current.innerHTML) {
            shareButtonRef.current.innerHTML = '';
        }
        window.gapi.sharetoclassroom.render(shareButtonRef.current, {
          url: window.location.href,
          title: "English Conditionals Quiz Result",
          body: `I scored ${totalPoints} points! Test your skills here.`,
          theme: "dark" // Use dark theme to match the app's aesthetic
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [totalPoints]);

  return <div ref={shareButtonRef} className="h-[40px]"></div>;
};

// Add gapi to the window interface to satisfy TypeScript
declare global {
  interface Window {
    gapi: any;
  }
}

export default GoogleClassroomShare;