import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfooditemComponent } from './editfooditem.component';

describe('EditfooditemComponent', () => {
  let component: EditfooditemComponent;
  let fixture: ComponentFixture<EditfooditemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfooditemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
