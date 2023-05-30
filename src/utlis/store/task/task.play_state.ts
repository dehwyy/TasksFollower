import { TaskPlayData } from '@/utlis/store/task/task.play'
import { AppStore } from '@/utlis/store/store'
import { atom, PrimitiveAtom } from 'jotai'

interface ITaskPlayState {
  jobsCount: number
  jobTime: number
  jobTimePassed: PrimitiveAtom<number>
  restTime: number
  restTimePassed: PrimitiveAtom<number>
  stagePassed: PrimitiveAtom<number>
}

interface ITaskPlayWithTimers extends ITaskPlayState {
  jobTimer: NodeJS.Timer
  restTimer: NodeJS.Timer
}

class TaskPlayStateClass implements ITaskPlayWithTimers {
  jobsCount: number
  jobTime: number
  jobTimePassed: PrimitiveAtom<number>
  restTime: number
  restTimePassed: PrimitiveAtom<number>
  jobTimer: NodeJS.Timer
  restTimer: NodeJS.Timer
  stagePassed: PrimitiveAtom<number>
  restPassed: PrimitiveAtom<number>

  constructor() {
    this.JobStart = this.JobStart.bind(this)
    this.RestStart = this.RestStart.bind(this)
    this.jobsCount = (AppStore.get(TaskPlayData.jobs).value as string[]).length
    this.jobTime = AppStore.get(TaskPlayData.timeWork).value as number
    this.restTime = AppStore.get(TaskPlayData.timeRest).value as number
    this.jobTimePassed = atom(0)
    this.restTimePassed = atom(0)
    this.stagePassed = atom(0)
    this.restPassed = atom(0)
  }

  public JobStart() {
    this.jobTimer = setInterval(() => {
      // getting the current time that already passed
      const currentTimePassed = AppStore.get(this.jobTimePassed)
      // if currentTime equals to the jobTime, we should end this Job, else continue adding seconds
      if (currentTimePassed >= this.jobTime) {
        // clearing this timer
        clearInterval(this.jobTimer)
        // Setting jobTimePassed to 0s
        AppStore.set(this.jobTimePassed, 0)
        const currentStagePassed = AppStore.get(this.stagePassed)
        // Increasing passed by stages
        AppStore.set(this.stagePassed, currentStagePassed + 1)
        // If passed stage haven't reached yet the totalStagesCount, which is calculated as totalJobs * 2 - 1,
        // tatoeba for 5 jobs we would have only 4 breaks J--J--J--J--J->END
        if (currentStagePassed !== this.jobsCount - 2) {
          // invoking the RestTimer
          this.RestStart()
        } else {
          // ClearingTimeout so it won;t start
          AppStore.set(this.restPassed, AppStore.get(this.restPassed) + 1)
          clearInterval(this.restTimer)
        }
      } else {
        AppStore.set(this.jobTimePassed, currentTimePassed + 1)
      }
    }, 1000)
  }

  public RestStart() {
    this.restTimer = setInterval(() => {
      const currentTimePassed = AppStore.get(this.restTimePassed)
      if (currentTimePassed >= this.restTime) {
        clearInterval(this.restTimer)
        AppStore.set(this.restTimePassed, 0)
        AppStore.set(this.restPassed, AppStore.get(this.restPassed) + 1)
        this.JobStart()
      } else {
        AppStore.set(this.restTimePassed, currentTimePassed + 1)
      }
    }, 1000)
  }
}

export const TaskPlayState = new TaskPlayStateClass()
