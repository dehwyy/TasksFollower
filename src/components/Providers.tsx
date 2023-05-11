'use client'
import {Provider} from 'jotai'

interface IProps {
  children: React.ReactNode
}

const Providers = ({ children }: IProps) => {
  return (
    <Provider>
      {children}
    </Provider>
  )
}

export default Providers