import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Passager } from 'src/app/models/passager.model';
import { Vol } from 'src/app/models/vol.model';

@Component({
  selector: 'app-liste-vols',
  templateUrl: './liste-vols.component.html',
  styleUrls: ['./liste-vols.component.scss']
})
export class ListeVolsComponent {
  @Input() vols! : Vol[];
  @Output() VolEvent = new EventEmitter<Vol>();
  onVolClick(vol : Vol){
    this.VolEvent.emit(vol);
  }
}
