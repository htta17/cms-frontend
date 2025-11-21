import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutList } from './layout-list';

describe('LayoutList', () => {
  let component: LayoutList;
  let fixture: ComponentFixture<LayoutList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
