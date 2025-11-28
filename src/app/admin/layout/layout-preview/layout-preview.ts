import { Component, Input, Output, EventEmitter, ElementRef,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  QueryList,
  ViewChildren,
  Renderer2 } from '@angular/core';
  
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-layout-preview',
  imports: [CommonModule, TableModule],
  templateUrl: './layout-preview.html',
  styleUrl: './layout-preview.scss',
})
export class LayoutPreview {
  @Input() columns: 1 | 2 | 3 = 3;
  @Output() columnWidthsChange = new EventEmitter<number[]>();

  onColumnResize(event: any) { 

    // Get current column widths as percentages
    const columnWidthsPercent = this.getColumnWidthsPercent();

    console.log('Column resized', event, columnWidthsPercent);

    this.columnWidthsChange.emit(columnWidthsPercent);    
  }

  private getColumnWidthsPercent(): number[] {
    // Get the container width
    const container = document.querySelector('.layout-preview') as HTMLElement;
    if (!container) return [];
    
    const containerWidth = container.offsetWidth;
    const widths: number[] = [];
    
    const headers = document.querySelectorAll('.layout-preview th');
    headers.forEach(header => {
      const pixelWidth = (header as HTMLElement).offsetWidth;
      const percentage = (pixelWidth / containerWidth) * 100;
      widths.push(Math.round(percentage * 100) / 100); // Round to 2 decimals
    });
    
    return widths;
  }
}
