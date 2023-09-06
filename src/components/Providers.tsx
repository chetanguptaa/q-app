'use client'

import { SessionProvider } from 'next-auth/react';
import React from 'react'
import { 
  ThemeProvider as NextThemeProvider,
} from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { 
  QueryClientProvider, 
  QueryClient 
} from '@tanstack/react-query';

const queryClient = new QueryClient();

const Providers = ({children, ...props}: ThemeProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemeProvider 
      attribute='class' 
      defaultTheme='system' 
      enableSystem
      {...props}
      >
          <SessionProvider>
              {children}
          </SessionProvider>
      </NextThemeProvider>
    </QueryClientProvider>
  )
}

export default Providers;