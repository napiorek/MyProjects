/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CurrencyPipe, PercentPipe } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { ChangePipe } from '../../pipes/change.pipe';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [
        SummaryComponent,
        ChangePipe,
      ], 
      providers: [
        CurrencyPipe,
        PercentPipe
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render for a positive change', () => {
    component.stock = { symbol: 'abs', lastTradePriceOnly: 10, change: .25, changeInPercent: 0.025 };
    fixture.detectChanges();

    const content = el.querySelector('.mdl-card h4').innerHTML;
    expect(content).toContain('ABS');
    expect(content).toContain('$10.00');
    expect(content).toContain('$0.25 (2.50%)');
  });

  it('should render for a negative change', () => {
    component.stock = { symbol: 'test', lastTradePriceOnly: 8.34, change: -1.43, changeInPercent: -0.0243 };
    fixture.detectChanges();

    const content = el.querySelector('.mdl-card h4').innerHTML;
    expect(content).toContain('TEST');
    expect(content).toContain('$8.34');
    expect(content).toContain('-$1.43 (-2.43%)');
  });
});
