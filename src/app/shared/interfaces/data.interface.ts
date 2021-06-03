export interface APIResponse<T> {
  allPeople: T
}

export interface DataResponse {
  people: APIResponse<People[]>;
  pageInfo: APIResponse<Pagination>
}

export interface HomeWorld {
  name: string
}

export interface Species {
  name: string
}

export interface People {
  id: number
  name: string
  homeworld: HomeWorld
  species: Species
  eyeColor:String
  hairColor:String
  skinColor:String
  birthYear:String
  vehicleConnection: VehicleConnection
}

export interface VehicleConnection{
  vehicles: Vehicle[]
}

export interface Vehicle{
  name: string;
}

export interface Pagination{
  startCursor: string;
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface ListPeople{
  people: People[],
  pageInfo: Pagination
}
