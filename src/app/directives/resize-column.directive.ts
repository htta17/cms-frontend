import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[resize-column]',
})
export class ResizeColumnDirective {
  private startX = 0;
  private startWidth = 0;

  constructor(private el: ElementRef) { 
    const grip = document.createElement('div');
    grip.style.width = '5px';
    grip.style.height = '100%';
    grip.style.position = 'absolute';
    grip.style.top = '0';
    grip.style.right = '0';
    grip.style.cursor = 'col-resize';
    grip.style.background = 'transparent';

    this.el.nativeElement.appendChild(grip);

    grip.addEventListener('mousedown', (e: MouseEvent) => {
      this.startX = e.pageX;
      this.startWidth = this.el.nativeElement.offsetWidth;
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    });
  }

  onMouseMove = (e: MouseEvent) => {
    const width = this.startWidth + (e.pageX - this.startX);
    this.el.nativeElement.style.width = width + 'px';
  };

  onMouseUp = () => {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

}
