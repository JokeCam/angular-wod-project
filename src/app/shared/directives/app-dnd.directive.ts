import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app-dnd]'
})
export class AppDndDirective {
  isMouseDown = false;
  prevX = 0;
  prevY = 0;

  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostListener('mousedown', ['$event'])
  handleMouseDown(e: MouseEvent) {
    this.isMouseDown = true;

    this.prevX = e.clientX;
    this.prevY = e.clientY;
  }

  @HostListener('mouseup', ['$event'])
  handleMouseUp() {
    this.isMouseDown = false;
  }

  @HostListener('mousemove', ['$event'])
  handleMouseMove(e: MouseEvent) {
    if (!this.isMouseDown) {
      return;
    }

    const parent = this.element.nativeElement.parentElement;

    let newX = e.clientX - this.prevX;
    let newY = e.clientY - this.prevY;
    const rect = parent.getBoundingClientRect()

    parent.style.left = rect.left + newX + "px";
    parent.style.top = rect.top + newY + "px";

    this.renderer.setStyle(parent, 'left', rect.left + newX + "px");
    this.renderer.setStyle(parent, 'top', rect.top + newY + "px");

    this.prevX = e.clientX;
    this.prevY = e.clientY;
  }
}
