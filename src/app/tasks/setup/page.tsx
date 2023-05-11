'use client'
import { useAtom } from 'jotai'
import { tasksAtom, sortedTasksAtom } from '@/utlis/store/tasks.atom'
import { useCallback, useState } from 'react'
import { ITasksAtom } from '@/utlis/store/tasks.types'

type ThereAreStyles = {target: {style: { backgroundColor: string }}}

const Page = () => {
  const [_, setTasks] = useAtom(tasksAtom)
  const [sortedTasks] = useAtom(sortedTasksAtom)
  const [pickedCard, setPickedCard] = useState<null | ITasksAtom>(null)

  const  dragStartHandler = useCallback((e: React.DragEvent<HTMLDivElement>, task: ITasksAtom) => setPickedCard(task), [])

  const  dragEndHandler = useCallback((e: React.DragEvent<HTMLDivElement>) => (e as ThereAreStyles).target.style.backgroundColor = "white", [])

  const  dragOvertHandler = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // wow wow semicolon... now way
    (e as ThereAreStyles).target.style.backgroundColor = "lightblue"
  }, [])

  const  dropHandler = useCallback((e: React.DragEvent<HTMLDivElement> , task: ITasksAtom) => {
    e.preventDefault();
    (e as ThereAreStyles).target.style.backgroundColor = "white"
    setTasks(sortedTasks.map((t => {
      if (t.id === pickedCard?.id) {
        return {...pickedCard, order: task.order}
      } else if (t.id === task.id) {
        return { ...t, order: pickedCard!.order } as ITasksAtom
      }
      return t
    })))
  }, [pickedCard])

  return (
    <div className="flex justify-between items-center gap-x-5">
      {
        sortedTasks.map((task) => (
          <div key={task.id}
               onDragStart={e => dragStartHandler(e, task)}
               onDragLeave={e => dragEndHandler(e)}
               onDragEnter={e => dragEndHandler(e)}
               onDragOver={e => dragOvertHandler(e)}
               onDrop={e => dropHandler(e, task)}
               draggable={true}
               className="h-[200px] flex items-center justify-center text-black text-bold text-3xl bg-white text-center w-full py-3 rounded-xl cursor-pointer select-none transition-all">
            {task.name}
          </div>
        ))
      }
    </div>
  )
}

export default Page