import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResizeColumn]', // The directive selector
  standalone: true, // Ensures it's usable in standalone components
})
export class ResizeColumnDirective {
  private isResizing = false;
  private startX!: number;
  private startWidth!: number;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    console.log('e')
    this.isResizing = true;
    this.startX = event.clientX;
    this.startWidth = this.el.nativeElement.offsetWidth;
    event.preventDefault(); // Prevent text selection while resizing
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    console.log('e')
    if (!this.isResizing) {
      return;
    }

    const newWidth = this.startWidth + event.clientX - this.startX;
    console.log(newWidth)
    this.renderer.setStyle(this.el.nativeElement, 'width', `${newWidth}px`);
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isResizing = false;
  }
}
