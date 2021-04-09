import { useCallback, useState } from 'react'
import { GOOGLE_API_KEY } from '../secret'
import { Locations } from '../types/locations'

export const useLocationQuery = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<null | Locations>(null)
  const [error, setError] = useState(null)

  const mutation = useCallback(async query => {
    setLoading(true)
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${GOOGLE_API_KEY}`
    )
    const json = await res.json()
    setData(json)
    setLoading(false)
  }, [])

  return {
    mutation,
    data,
    loading,
    error
  }
}
