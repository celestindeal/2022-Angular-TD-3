import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClasseBagage]'
})
export class ClasseBagageDirective {


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
