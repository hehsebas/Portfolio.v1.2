"use client";
import React, { useState, useEffect } from "react";

interface DelayedVisibilityProps {
  children: React.ReactNode;
  delay?: number; 
}

const DelayedVisibility: React.FC<DelayedVisibilityProps> = ({ children, delay = 1500 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return <>{isVisible && children}</>;
};

export default DelayedVisibility;