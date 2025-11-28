import { Component } from '@angular/core';
import { LayoutPreview } from "../layout-preview/layout-preview";

@Component({
  selector: 'app-layout-add',
  imports: [LayoutPreview],
  templateUrl: './layout-add.html',
  styleUrl: './layout-add.scss',
})
export class LayoutAdd {
  constructor() {
    this.numOfColumn = 3;
  }

  numOfColumn: number;
}
