'use client'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { useState } from 'react'

interface IProps {}

const Page = ({}: IProps) => {
  const [isShow, setShow] = useState(false)
  const [isSignIn, setSignIn] = useState(true)
  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 flex items-center justify-center">
      <div className="w-1/4 lg:w-1/3 sm:w-full px-1 ">
        <div className="flex flex-col gap-y-5 bg-backgroundColorSecond rounded-xl pt-5 pb-10 px-5 ">
          <h2 className="text-center text-2xl">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
          <Input variant="flushed" focusBorderColor="pink.500" placeholder="username" />
          <InputGroup size="md">
            <Input variant="flushed" focusBorderColor="pink.500" placeholder="password" type={isShow ? 'text' : 'password'} />
            <InputRightElement width="4.5rem">
              <div
                onClick={() => setShow(p => !p)}
                className="text-pinkLight active:bg-violetBorderLighter hover:bg-violetPale px-2 rounded-lg transition-all cursor-pointer">
                {isShow ? 'Hide' : 'Show'}
              </div>
            </InputRightElement>
          </InputGroup>
          <div className="flex justify-between px-5 lg:px-3 sm:px-1">
            <button className="py-1 px-3 block-item-hover rounded-lg" onClick={() => setSignIn(false)}>
              Sign up
            </button>
            <button className="py-1 px-3 block-item-hover rounded-lg" onClick={() => setSignIn(true)}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
