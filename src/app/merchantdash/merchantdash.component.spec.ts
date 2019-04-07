import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantdashComponent } from './merchantdash.component';

describe('MerchantdashComponent', () => {
  let component: MerchantdashComponent;
  let fixture: ComponentFixture<MerchantdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
