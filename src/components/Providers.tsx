'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'jotai'
import { AppStore } from '@/utlis/store/store'

interface IProps {
  children: React.ReactNode
}

const Providers = ({ children }: IProps) => {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Provider store={AppStore}>{children}</Provider>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default Providers
