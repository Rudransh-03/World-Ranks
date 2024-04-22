import { ReactNode } from "react";

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

export interface NeighbourCountries {
    name: string,
    flag: string
}

export interface CountryNeighboursProps{
    country: any;
    countries: any[];
}

export interface CountryInfoCardProps{
    title: string,
    value: string
}

export interface StatusTerms{
    unMember : boolean,
    independent : boolean
}

export interface FilteredCountriesResult {
    tableContent: any[]; // Define the type of tableContent here
}

export interface Currencies{
    name: string,
    symbol: string
}

export interface CountryInterface{
  country: any
}

export interface ButtonProps {
    children: ReactNode;
}

export interface OnlyTableProps {
    currentRecords: any[]; // Assuming currentRecords is an array of any type
}