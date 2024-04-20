export interface Country{
    flag: string,
    name: string,
    population: number,
    area: number,
    region: number,
}

export interface PaginationComponent{
    nPages: number,
    currentPage: number,
    setCurrentPage: any
}

export interface CountriesTableProps{
    currentRecords: any,
    nPages: number,
    currentPage: number,
    setCurrentPage: any
}