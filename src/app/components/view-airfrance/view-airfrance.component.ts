import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { AEROPORTS } from 'src/app/constants/aeroport.constant';
import { IFiltres } from 'src/app/models/filtres.model';
import { Vol } from 'src/app/models/vol.model';
import { VolService } from '../../services/vol.service';
import { VolComponent } from '../vol/vol.component';
import { Subscription } from 'rxjs';
import { Passager } from 'src/app/models/passager.model';
import { PassagerService } from 'src/app/services/passager.service';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-view-airfrance',
  templateUrl: './view-airfrance.component.html',
  styleUrls: ['./view-airfrance.component.scss']
})
export class ViewAirFranceComponent implements OnDestroy, OnInit{

  vols: Vol[] = [];

  obsVols?:Observable<Vol[]>;
  private _subVols : Subscription = new Subscription();

  volSelected!  : Vol;
  private obsVolSelected?:Observable<Passager[]>;
  private _subVolSelected : Subscription = new Subscription();

  type: string = 'decollages';
  private _subRoute : Subscription = new Subscription();


  
  constructor(private _volService: VolService, private _passagerService: PassagerService, private _activatedRoute: ActivatedRoute) {}

  /**
   * Réaction à la mise à jour des filtres
   * On souhaite récupérer les vols qui correspondent aux filtres passés en paramètre
   * en utilisant le service défini dans le constructeur
   * @param filtres récupérés depuis le composant enfant
   */
  onFiltresEvent(filtres: IFiltres): void {
   
    this.obsVols = this._volService.getVols(filtres.aeroport.icao,(filtres.debut.getTime()/1000),(filtres.fin.getTime()/1000), this.type == 'decollages' ? 'departure' : 'arrival');
    this._subVols = this.obsVols.subscribe((value)=>{
      this.vols = value;
    });
  }

  ngOnInit(): void {
        this._subRoute = this._activatedRoute.data.subscribe((data$) => {
        this.type = data$['type'] ? data$['type'] : 'decollages';
      })
  }

  ngOnDestroy(): void {
    this._subVols.unsubscribe();
    this._subVolSelected.unsubscribe();
    this._subRoute.unsubscribe();
  }

  onVolEvent(vol : Vol):void{
    this.volSelected = vol;
    this.obsVolSelected = this._passagerService.getPassagers(vol.icao);
    this._subVolSelected = this.obsVolSelected.subscribe((value)=>{
      this.volSelected.passagers = value;
    });
  }

}

