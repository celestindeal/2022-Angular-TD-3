import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClasseBagage]'
})
export class ClasseBagageDirective {


  /**
   * Vérifie que le nombre de bagage emporté par le passagé est bien inférieur ou égal au nombre
   * de bagages qui lui sont autorisé en fonciton de la classe qu'il a choisie pour ce vol.
   * S'il n'a pas respecté le bon nombre de bagage, la valise aura un fond de couleur rouge.
   * STANDARD : 1 bagage max
   * PREMIUM : 2 bagages max
   * BUSINESS : 3 bagages max
   * @param value tableau de string : première case, la classe du vol du passager ; deuxième case, le nombre de bagages qu'il a emportés.
   */
  @Input() set appClasseBagage(value: string[]) {
    let color;
    switch (value[0]) {
      case "STANDARD":
        color = parseInt(value[1], 10) > 1 ? "red" : "auto";
        break;
      case "PREMIUM":
        color = parseInt(value[1], 10) > 2 ? "red" : "auto";
        break;
      case "BUSINESS":
        color = parseInt(value[1], 10) > 3 ? "red" : "auto";
        break;
      default:
        color = "black";
        break;
    }
    this.el.nativeElement.style.backgroundColor = color;
  }

  constructor(private el: ElementRef) {}

}
