import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutFooter } from './admin-layout-footer';

describe('AdminLayoutFooter', () => {
  let component: AdminLayoutFooter;
  let fixture: ComponentFixture<AdminLayoutFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLayoutFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLayoutFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
