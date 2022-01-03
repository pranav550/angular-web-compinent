import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MywcComponent } from './mywc.component';

describe('MywcComponent', () => {
  let component: MywcComponent;
  let fixture: ComponentFixture<MywcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MywcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MywcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
