import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPriceColor]'
})
export class PriceColorDirective implements OnChanges {
  @Input() appPriceColor!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.updateColor();
  }

  private updateColor() {
    if (this.appPriceColor % 2 === 0) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    }
  }
}
