import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { MockStocksResponse, MockSymbolsList } from './stocks.mock';
import { StocksService } from './stocks.service';

export class StubStocksService extends StocksService {

  constructor() {
    super({} as HttpClient);
  }

  load(symbols: string[]) {
    return Observable.of(MockStocksResponse);
  }
}