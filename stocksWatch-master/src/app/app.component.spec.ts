import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StocksService } from './services/stocks.service';
import { StubStocksService } from './services/stocks.service.stub';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: HTMLElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: StocksService, useClass: StubStocksService }
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement.nativeElement;
    expect(component).toBeTruthy();
    fixture.detectChanges();
  });
});
