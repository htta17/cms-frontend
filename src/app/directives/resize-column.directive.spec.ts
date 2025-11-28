import { ElementRef } from '@angular/core';
import { ResizeColumnDirective } from './resize-column.directive';

describe('ResizeColumn', () => {
  it('should create an instance', () => {
    const directive = new ResizeColumnDirective(new ElementRef(null));
    expect(directive).toBeTruthy();
  });
});
