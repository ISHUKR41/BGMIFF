/**
 * useTypingSound Hook
 * 
 * Custom hook for generating typing sound effects using Web Audio API.
 * 
 * Features:
 * - Creates subtle typing sounds using oscillators
 * - Automatically manages AudioContext lifecycle
 * - Server-safe (checks for window availability)
 * - Exponential fade-out for natural sound
 * 
 * Used to add auditory feedback for typing interactions,
 * enhancing user engagement.
 */

import { useEffect, useRef } from 'react';

/**
 * Custom hook that provides typing sound effect functionality
 * 
 * @returns Object with playTypingSound function
 */
export function useTypingSound() {
  // Store AudioContext reference for cleanup
  const audioContextRef = useRef<AudioContext | null>(null);

  /**
   * Initialize AudioContext on mount and clean up on unmount
   */
  useEffect(() => {
    // Only create AudioContext in browser environment
    if (typeof window !== 'undefined' && 'AudioContext' in window) {
      audioContextRef.current = new AudioContext();
    }
    
    // Clean up AudioContext on unmount
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  /**
   * Play a short, subtle typing sound effect
   * 
   * Creates a 800Hz sine wave with exponential fade-out
   * over 50ms for a natural typing sound.
   */
  const playTypingSound = () => {
    if (!audioContextRef.current) return;
    
    const context = audioContextRef.current;
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    
    // Connect audio nodes
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    // Configure sound characteristics
    oscillator.frequency.value = 800;      // High frequency for typewriter effect
    oscillator.type = 'sine';              // Smooth sine wave
    
    // Set up volume fade-out for natural sound
    gainNode.gain.setValueAtTime(0.05, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.05);
    
    // Play sound for 50ms
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.05);
  };

  return { playTypingSound };
}
