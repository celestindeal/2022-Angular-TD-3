import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Passager } from 'src/app/models/passager.model';
import { Vol } from 'src/app/models/vol.model';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-liste-passagers',
  templateUrl: './liste-passagers.component.html',
  styleUrls: ['./liste-passagers.component.scss']
})
export class ListePassagersComponent   {
  @Input() vol! : Vol;
  photos:boolean=false;

  onChangePhoto(){
    this.photos = !this.photos;
    console.log(this.photos);
  }
}
