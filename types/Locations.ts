export interface Locations {
  results: ResultsEntity[]
  status: string
}
export interface ResultsEntity {
  address_components: AddressComponentsEntity[]
  formatted_address: string
  geometry: Geometry
  place_id: string
  types?: string[] | null
}
export interface AddressComponentsEntity {
  long_name: string
  short_name: string
  types?: string[] | null
}
export interface Geometry {
  bounds: BoundsOrViewport
  location: NortheastOrSouthwestOrLocation
  location_type: string
  viewport: BoundsOrViewport
}
export interface BoundsOrViewport {
  northeast: NortheastOrSouthwestOrLocation
  southwest: NortheastOrSouthwestOrLocation
}
export interface NortheastOrSouthwestOrLocation {
  lat: number
  lng: number
}
