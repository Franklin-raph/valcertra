import React, { useState, useEffect, useRef } from 'react';

const CustomGoogleTranslate = () => {
  const [languages] = useState([
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'zh-CN', name: 'Chinese (Simplified)' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'ar', name: 'Arabic' }
  ]);
  
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    // Get initial language from localStorage or default to 'en'
    return localStorage.getItem('selectedLanguage') || 'en';
  });
  
  const translateElementRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Function to initialize Google Translate
    const initializeGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: languages.map(lang => lang.code).join(','),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          },
          translateElementRef.current.id
        );
        
        // Apply initial language if not English
        if (selectedLanguage !== 'en') {
          setTimeout(() => changeLanguage(selectedLanguage), 300);
        }
      }
    };

    // Create the Google Translate script element
    const loadGoogleTranslateScript = () => {
      if (scriptLoadedRef.current) return;
      
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      
      // Define the callback function
      window.googleTranslateElementInit = initializeGoogleTranslate;
      
      document.body.appendChild(script);
      scriptLoadedRef.current = true;
    };
    
    loadGoogleTranslateScript();
    
    // Cleanup function
    return () => {
      delete window.googleTranslateElementInit;
    };
  }, [languages, selectedLanguage]);

  // Change the language programmatically
  const changeLanguage = (languageCode) => {
    // Save selection to localStorage
    localStorage.setItem('selectedLanguage', languageCode);
    setSelectedLanguage(languageCode);
    
    // Find the Google Translate select element and trigger a change
    setTimeout(() => {
      const selectElement = document.querySelector('.goog-te-combo');
      if (selectElement) {
        selectElement.value = languageCode;
        
        // Create and dispatch change event
        const event = new Event('change', { bubbles: true });
        selectElement.dispatchEvent(event);
      }
    }, 300);
  };

  return (
    <div className="translate-container">
      {/* Hidden Google Translate element */}
      <div 
        id="google_translate_custom_element" 
        ref={translateElementRef}
        style={{ visibility: 'hidden', height: '0', overflow: 'hidden' }}
      ></div>
      
      {/* Custom UI */}
      <div className="custom-translate-ui">
        <select
          value={selectedLanguage}
          onChange={(e) => changeLanguage(e.target.value)}
          className="p-2 border rounded bg-white"
        >
          {languages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
      </div>
      
      {/* CSS to hide Google's default UI */}
      <style jsx>{`
        /* Hide Google's top bar */
        body > .skiptranslate {
          display: none !important;
        }
        
        .goog-te-banner-frame {
          display: none !important;
        }
        
        /* Fix Google Translate shifting the body down */
        body {
          top: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default CustomGoogleTranslate;