import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appClasseVol]'
})
export class ClasseVolDirective {

    /**
     * Affiche la classe du vol en une couleur différente en fonction de la classe
     * STANDARD : bleu
     * PREMIUM : vert
     * BUSINESS : rouge
     * @param value la classe du passager
     */
    @Input() set appClasseVol(value: string) {
        let color;
        switch (value) {
            case "STANDARD":
                color = "blue";
                break;
            case "PREMIUM":
                color = "green";
                break;
            case "BUSINESS":
                color = "red";
                break;
            default:
                color = "black";
        }
        this.el.nativeElement.style.color = color
    }

    constructor(private el: ElementRef) {}

}