import { useCallback, useState } from 'react'
import { Tours } from '../types/Tours'

export const useTourQuery = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<null | Tours>(null)
  const [error, setError] = useState(null)

  const mutation = useCallback(async ({ topRight, bottomLeft }) => {
    setLoading(true)
    const res = await fetch(
      `https://staging.tourmega.com/api/v2/tours?lat_bottom_right=${topRight[0]}&lon_bottom_right=${topRight[1]}&lat_top_left=${bottomLeft[0]}&lon_top_left=${bottomLeft[1]}`
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
