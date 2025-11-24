import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutHeader } from './admin-layout-header';

describe('AdminLayoutHeader', () => {
  let component: AdminLayoutHeader;
  let fixture: ComponentFixture<AdminLayoutHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLayoutHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLayoutHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
