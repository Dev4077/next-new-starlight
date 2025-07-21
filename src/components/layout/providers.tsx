'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { ActiveThemeProvider } from '../active-theme';

export default function Providers({
  activeThemeValue,
  children
}: {
  activeThemeValue: string;
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <ActiveThemeProvider initialTheme={activeThemeValue}>
      {/* You can use resolvedTheme for conditional logic if needed */}
      {children}
    </ActiveThemeProvider>
  );
}
