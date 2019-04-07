import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfooditemsComponent } from './showfooditems.component';

describe('ShowfooditemsComponent', () => {
  let component: ShowfooditemsComponent;
  let fixture: ComponentFixture<ShowfooditemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfooditemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
