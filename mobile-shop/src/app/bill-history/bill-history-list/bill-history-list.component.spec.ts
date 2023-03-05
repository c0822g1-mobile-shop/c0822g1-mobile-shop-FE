import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillHistoryListComponent } from './bill-history-list.component';

describe('BillHistoryListComponent', () => {
  let component: BillHistoryListComponent;
  let fixture: ComponentFixture<BillHistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillHistoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
