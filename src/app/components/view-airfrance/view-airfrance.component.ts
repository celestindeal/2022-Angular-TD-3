import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { AEROPORTS } from 'src/app/constants/aeroport.constant';
import { IFiltres } from 'src/app/models/filtres.model';
import { Vol } from 'src/app/models/vol.model';
import { VolService } from '../../services/vol.service';
import { VolComponent } from '../vol/vol.component';
import { Subscription } from 'rxjs';





@Component({
  selector: 'app-view-airfrance',
  templateUrl: './view-airfrance.component.html',
  styleUrls: ['./view-airfrance.component.scss']
})
export class ViewAirFranceComponent implements OnDestroy{

  vols: Vol[] = [];
  obs?:Observable<Vol[]>;
  private _sub : Subscription = new Subscription();
  constructor(private _volService: VolService) {}
  

  /**
   * Réaction à la mise à jour des filtres
   * On souhaite récupérer les vols qui correspondent aux filtres passés en paramètre
   * en utilisant le service défini dans le constructeur
   * @param filtres récupérés depuis le composant enfant
   */
  onFiltresEvent(filtres: IFiltres): void {
   
    this.obs = this._volService.getVolsDepart(filtres.aeroport.icao,(filtres.debut.getTime()/1000),(filtres.fin.getTime()/1000));
    this._sub = this.obs.subscribe((value)=>{
      this.vols = value;
    });
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
  
}

