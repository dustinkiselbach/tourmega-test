export interface Tours {
  success: boolean
  data?: DataEntity[] | null
}
export interface DataEntity {
  path: string
  price_in_usd: number
  name: string
  booking_flow_type: number
  average_rating: number
  duration_in_minutes: number
  number_of_reviews: number
  id: number
  thumbnail_url: string
  city_id: number
  city: string
  favorited: boolean
}
