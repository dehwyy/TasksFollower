'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'jotai'

interface IProps {
  children: React.ReactNode
}

const Providers = ({ children }: IProps) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Provider>{children}</Provider>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default Providers
