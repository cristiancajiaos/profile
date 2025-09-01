import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackExchange } from './stack-exchange';

describe('StackExchange', () => {
  let component: StackExchange;
  let fixture: ComponentFixture<StackExchange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StackExchange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackExchange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
