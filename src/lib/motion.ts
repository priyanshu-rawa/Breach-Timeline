import type { Transition } from 'framer-motion';

// Critically-damped-ish spring: smooth glide, no bounce/jitter.
export const buttery: Transition = { type: 'spring', stiffness: 300, damping: 40, mass: 0.9 };
export const butteryHover: Transition = { type: 'spring', stiffness: 400, damping: 32 };
