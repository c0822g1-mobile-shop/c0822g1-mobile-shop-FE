import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoditySelectComponent } from './commodity-select.component';

describe('CommoditySelectComponent', () => {
  let component: CommoditySelectComponent;
  let fixture: ComponentFixture<CommoditySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommoditySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommoditySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
