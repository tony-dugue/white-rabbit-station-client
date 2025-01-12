import { Type } from "@angular/core";

export type CategoryName = "ALL" | "ROCK" | "HARD ROCK" | "INDIE ROCK" | "BLUES" | "PUNK" 
| "METAL" | "ALTERNATIF" | "COUNTRY" | "RAP HIP HOP" | "JAZZ" | "VARIETES" | "FUNK" | "RNB" | "SOUL" | "DISCO" 
| "SOUNDTRACK" | "MUSIQUE DU MONDE" | "POP RETRO" | "MUSIQUE CLASSIQUE" | "POP" | "ELECTRO"

export interface Category {
  iconComponent: Type<any>;
  displayName: string,
  technicalName: CategoryName,
  activated: boolean
}



