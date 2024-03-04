import { useEffect, useState } from 'react'
import type { Workout } from '@interfaces/Workout'
import { getAllWorkouts } from '@services/workout'
import { WorkoutPreview } from './WorkoutPreview.tsx'
import { Pagination } from '@components/Shared/Pagination.tsx'
import Search from '@components/Shared/Search.tsx'

export const WorkoutsPage = () => {
  const [page, setPage] = useState(0)
  const [workouts, setWorkouts] = useState<Array<Workout>>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getAllWorkouts(page).then((workouts) => setWorkouts(workouts))
  }, [page])

  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <>
      <Search setSearch={setSearch} />
      <div className="flex flex-wrap justify-evenly">
        {workouts.map((workout: Workout) => (
          <WorkoutPreview workout={workout} key={workout.id} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  )
}
