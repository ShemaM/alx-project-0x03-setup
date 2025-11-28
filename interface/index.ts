// Remove React import - use global types
// import React from 'react';

// Keep interfaces simple for now
export interface ButtonProps {
  children: any; // Use 'any' temporarily to avoid ReactNode issues
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

export interface LayoutProps {
  children: any; // Use 'any' temporarily
}