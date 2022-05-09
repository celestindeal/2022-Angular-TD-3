import { Component, Input } from '@angular/core';
import { Passager } from 'src/app/models/passager.model';
import { Vol } from 'src/app/models/vol.model';

@Component({
  selector: 'app-liste-passagers',
  templateUrl: './liste-passagers.component.html',
  styleUrls: ['./liste-passagers.component.scss']
})
export class ListePassagersComponent {
  @Input() vol! : Vol;
}
