import { useEffect, useState } from 'react'
import type { Workout } from '@interfaces/Workout'
import { getAllWorkouts } from '@services/workout'
import { WorkoutPreview } from './WorkoutPreview.tsx'
import { Pagination } from '@components/Shared/Pagination.tsx'

export const WorkoutsPage = () => {
  const [page, setPage] = useState(0)
  const [workouts, setWorkouts] = useState<Array<Workout>>([])

  useEffect(() => {
    getAllWorkouts(page).then((workouts) => setWorkouts(workouts))
  }, [page])

  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        {workouts.map((workout: Workout, i) => (
          <WorkoutPreview workout={workout} key={i} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  )
}
