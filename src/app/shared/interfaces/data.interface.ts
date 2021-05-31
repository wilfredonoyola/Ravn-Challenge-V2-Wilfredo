export interface APIResponse<T> {
    people: T;
}

export interface DataResponse{
    allPeople: APIResponse<People[]>;
}


export interface HomeWorld{
    name: string;
}

export interface Species{
    name: string;
}

export interface People{
    id: number;
    name: string;
    homeworld: HomeWorld;
    specie: Species;
}