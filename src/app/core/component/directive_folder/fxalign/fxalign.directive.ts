import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFxalign]'
})
export class FxalignDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
  }

  @Input('appFxalign') set align(value: string) {
    const array = value.split(" ");
    console.log("array", array)
    if (array.length == 1) {
      this.renderer.setStyle(this.el.nativeElement, 'justify-content', array[0]);
      this.renderer.setStyle(this.el.nativeElement, 'align-items', array[0]);
    }
    else {
      this.renderer.setStyle(this.el.nativeElement, 'justify-content', array[0]);
      this.renderer.setStyle(this.el.nativeElement, 'align-items', array[1]);
    }

  }
}


