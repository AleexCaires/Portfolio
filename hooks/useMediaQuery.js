import react, { useState, useEffect } from "react";

export const useMediaQuery = (query) => {
    if ( typeof window === 'undefined' || typeof window.matchMedia === 'undefined' ) return false;

    const mediaQuery = window.matchMedia(query);
    const [match, setMatch] = react.useState(!!mediaQuery.matches);

    react.useEffect(() => {
        const handler = () => setMatch(!!mediaQuery.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler)
    }, [])
    

    return match;
}