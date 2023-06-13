import { Directive, ElementRef, HostListener, OnDestroy, Renderer2 } from '@angular/core';
import { Store } from "@ngxs/store";
import { Observable, Subscription } from "rxjs";
import { LaunchStateModel } from "../../../store/models/launch-state.model";
import { Launch } from "../../../store/actions/launch.actions";

@Directive({
  selector: '[app-dnd]'
})
export class AppDndDirective implements OnDestroy {
  isMouseDown = false;
  prevX = 0;
  prevY = 0;

  zIndex = 0;
  zIndex$: Observable<LaunchStateModel["windowZIndex"]>;
  subscritions = new Subscription();

  constructor(
    private store: Store,
    private element: ElementRef,
    private renderer: Renderer2) {
      this.zIndex$ = store.select(state => state.launch.windowZIndex);
      this.subscritions.add(
        this.zIndex$.subscribe((storeZIndex) => {
            this.zIndex = storeZIndex;
          })
      )
    };
  @HostListener('mousedown', ['$event'])
  handleMouseDown(e: MouseEvent) {
    this.isMouseDown = true;

    const parent = this.element.nativeElement.parentElement;
    this.renderer.setStyle(parent, 'z-index', this.zIndex);
    this.store.dispatch(new Launch.IncreaseZIndex());

    this.prevX = e.clientX;
    this.prevY = e.clientY;
  }

  @HostListener('mouseup', ['$event'])
  handleMouseUp() {
    this.isMouseDown = false;


  }

  @HostListener('window:mousemove', ['$event'])
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

  ngOnDestroy() {
    this.subscritions.unsubscribe();
  }
}
