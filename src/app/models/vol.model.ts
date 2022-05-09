import { COMPAGNIES } from './../constants/compagnie.constant';
import { IPassager } from './passager.model';

/**
 * OpenSky REST API Flight DTO
 * https://openskynetwork.github.io/opensky-api/rest.html#
*/
export interface IVolDto {
  icao24: string;
  firstSeen: number;
  estDepartureAirport: string;
  lastSeen: number;
  estArrivalAirport: string;
  callsign: string;
  estDepartureAirportHorizDistance: number;
  estDepartureAirportVertDistance: number;
  estArrivalAirportHorizDistance: number;
  estArrivalAirportVertDistance: number;
  departureAirportCandidatesCount: number;
  arrivalAirportCandidatesCount: number;
}


export interface IVol {
 icao: string;
 matricule: string;
 compagnie: string;
 aeroportDepart: string;
 aeroportArrivee: string;
}

export class Vol implements IVol {
  icao: string;
  matricule: string;
  compagnie: string;
  aeroportDepart: string;
  aeroportArrivee: string;
  passagers: IPassager[];
  type: string;

  constructor(dto: IVolDto, type: string) {
    this.icao = dto.icao24;
    this.matricule = dto.callsign;
    this.compagnie = this.getCompagnie(dto.callsign);
    this.aeroportDepart = dto.estDepartureAirport;
    this.aeroportArrivee = dto.estArrivalAirport;
    this.passagers = [];
    this.type = type;
  }

  getCompagnie(matricule: string): string {
    let compagnie: string = '';
    Object.entries(COMPAGNIES).forEach(([key$, value$]) => {
      if (matricule.includes(key$)) {
        compagnie = value$;
      }
    });

    return compagnie;
  }
}
