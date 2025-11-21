import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAdd } from './layout-add';

describe('LayoutAdd', () => {
  let component: LayoutAdd;
  let fixture: ComponentFixture<LayoutAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
