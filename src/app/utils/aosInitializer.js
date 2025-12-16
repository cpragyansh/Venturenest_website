// 'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function useInitializeAOS() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        offset: 200,
        duration: 1000,
        easing: 'ease',
        delay: 100,
        once: true,
        mirror: false,
      });
    }
  }, []);
}
