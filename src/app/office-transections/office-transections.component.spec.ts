import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeTransectionsComponent } from './office-transections.component';

describe('OfficeTransectionsComponent', () => {
  let component: OfficeTransectionsComponent;
  let fixture: ComponentFixture<OfficeTransectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeTransectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeTransectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
