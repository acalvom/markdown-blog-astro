import type { Workout } from '@interfaces/Workout'

// TODO include library for fetch
export const getAllWorkouts = async (): Promise<Array<Workout>> => {
  try {
    const response = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=10', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': import.meta.env.PUBLIC_API_KEY,
        'X-RapidAPI-Host': import.meta.env.PUBLIC_API_HOST
      }
    })
    return await response.json()
  } catch (error: any) {
    throw new Error('Failed to fetch workouts', error)
  }
}

export const getWorkoutById = async ({ id }: { id: string }): Promise<Workout> => {
  try {
    const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': import.meta.env.PUBLIC_API_KEY,
        'X-RapidAPI-Host': import.meta.env.PUBLIC_API_HOST
      }
    })
    return await response.json()
  } catch (error: any) {
    throw new Error('Failed to fetch workout' + id, error)
  }
}
