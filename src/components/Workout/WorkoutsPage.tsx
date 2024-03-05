import { useEffect, useState } from 'react'
import type { Workout } from '@interfaces/Workout'
import { getAllWorkouts, getWorkoutsByName } from '@services/workout'
import { WorkoutPreview } from './WorkoutPreview'
import { Pagination } from '@components/Shared/Pagination'
import { Search } from '@components/Shared/Search'

export const WorkoutsPage = () => {
  const [page, setPage] = useState(0)
  const [workouts, setWorkouts] = useState<Array<Workout>>([])
  const [search, setSearch] = useState('')
  const [enablePagination, setEnablePagination] = useState(workouts.length > 0)

  useEffect(() => {
    if (search === '') {
      getAllWorkouts(page).then((workouts) => {
        setWorkouts(workouts)
        setEnablePagination(workouts.length > 0)
      })
    } else {
      setEnablePagination(false)
      getWorkoutsByName(search).then((workouts) => setWorkouts(workouts))
    }
  }, [page, search])

  return (
    <>
      <Search setSearch={setSearch} />
      <div className="flex flex-wrap justify-evenly">
        {workouts.length > 0 &&
          workouts.map((workout: Workout) => <WorkoutPreview workout={workout} key={workout.id} />)}
      </div>
      {enablePagination ? <Pagination page={page} setPage={setPage} /> : null}
    </>
  )
}
