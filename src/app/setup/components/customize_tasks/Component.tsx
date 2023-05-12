'use client'
import { useState } from 'react'
import Heading from '@/app/setup/components/customize_tasks/Heading'
import Select from "@/app/setup/components/customize_tasks/select/Components"

interface IProps {

}

const time = [
  {id: 1, value: 50, name: "50 minutes"},
  {id: 2, value: 60, name: "50 minutes"},
  {id: 3, value: 80, name: "1:20 hour"},
  {id: 4, value: 110, name: "1:50 hour"},
  {id: 5, value: 120, name: "2 hours"},
  {id: 6, value: 180, name: "3 hours"}
]

const Component = ({}: IProps) => {
  const [isOpen, setOpen] = useState(true)
    return (
      <div style={{paddingLeft: "calc(100vw - 100%)"}} className={`${isOpen ? "bottom-[75%]" : "bottom-0"} fixed left-0 right-0 flex justify-center transition-all duration-700`}>
        <div className='relative transition-all duration-700'>
          <h3 onClick={() => setOpen(p => !p)} className={`border-b-0 border-2 border-blue-800 select-none bg-blue-600 text-md text-center px-10 py-2 rounded-t-2xl cursor-pointer`}>Customize your TasksTracker</h3>
          <div className={`${isOpen ? "top-[25%]" : "top-[100%] "} border-t-[3px] border-blue-800 fixed bg-gradient-to-r from-blue-600 to-fuchsia-600 bottom-0 left-0 right-0 transition-all duration-700`}>
            <article className='pt-5 px-2 flex flex-col'>
              <section className="flex gap-5">
                <Heading>Select time for each task:</Heading>
                <Select items={time} placeholder="Time in minutes"/>
              </section>
            </article>
          </div>
        </div>
      </div>
    )
}

export default Component