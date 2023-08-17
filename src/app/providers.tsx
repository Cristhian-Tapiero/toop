'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import FullContainer from '@/assets/full_container'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <FullContainer>
          {children}
        </FullContainer>
      </ChakraProvider>
    </CacheProvider>
  )
}