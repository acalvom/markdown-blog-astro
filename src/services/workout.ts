import type { Workout } from '@interfaces/Workout'

export const getAllWorkouts = async (): Promise<Array<Workout>> => {
  const response = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=10', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': import.meta.env.PUBLIC_API_KEY,
      'X-RapidAPI-Host': import.meta.env.PUBLIC_API_HOST
    }
  })
  return await response.json()
}
