'use client';
import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { theme } from '@styles/theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <Provider theme={theme}>{children}</Provider>;
}
