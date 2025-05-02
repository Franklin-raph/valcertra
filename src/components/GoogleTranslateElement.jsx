import React, { useEffect } from 'react';

const GoogleTranslateElement = () => {
  useEffect(() => {
    // Create the Google Translate script element
    const addScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
      
      // Define the callback function that Google's script will call
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en', // Set your website's original language
            includedLanguages: 'ar,zh-CN,en,fr,de,it,ja,ko,pt,ru,es', // Comma-separated language codes
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: true,
          },
          'google_translate_element'
        );
      };
    };
    
    // Only add the script if it doesn't already exist
    if (!document.querySelector('script[src*="translate.google.com/translate_a/element.js"]')) {
      addScript();
    }
    
    // Clean up when component unmounts
    return () => {
      const script = document.querySelector('script[src*="translate.google.com/translate_a/element.js"]');
      if (script) {
        document.body.removeChild(script);
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div id="google_translate_element" className="translate-widget"></div>
  );
};

export default GoogleTranslateElement;