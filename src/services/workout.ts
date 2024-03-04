import type { Workout } from '@interfaces/Workout'

// TODO include library for fetch
export const getAllWorkouts = async (page: number = 0): Promise<Array<Workout>> => {
  const offset = 10 * page

  try {
    const response = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=${offset}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': import.meta.env.PUBLIC_API_KEY,
          'X-RapidAPI-Host': import.meta.env.PUBLIC_API_HOST
        }
      }
    )
    return await response.json()
  } catch (error: any) {
    throw new Error('Failed to fetch workouts' + error)
  }
}

export const getWorkoutById = async ({
  id
}: Record<string, string | undefined>): Promise<Workout> => {
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
    throw new Error('Failed to fetch workout' + id + error)
  }
}
