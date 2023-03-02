import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WareHousingComponent } from './ware-housing.component';

describe('WareHousingComponent', () => {
  let component: WareHousingComponent;
  let fixture: ComponentFixture<WareHousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WareHousingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WareHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
