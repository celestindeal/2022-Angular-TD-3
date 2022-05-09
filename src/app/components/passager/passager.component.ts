import { Component, ElementRef, Input } from '@angular/core';
import { ClasseVolDirective } from 'src/app/classe-vol.directive';
import { ClasseBagageDirective } from 'src/app/classe-bagage.directive';
import { Passager } from 'src/app/models/passager.model';
import { Vol } from 'src/app/models/vol.model';

@Component({
  selector: 'app-passager',
  templateUrl: './passager.component.html',
  styleUrls: ['./passager.component.scss']
})
export class PassagerComponent {
@Input() passager!: Passager;
@Input() appClasseVol!: ClasseVolDirective;





}
