import 'rxjs/add/observable/interval';

export interface ICurrency {
    symbol: string;
    lastPrice: number;
    priceChange: number;
    priceChangePercent: number;
    weightedAvgPrice: number;
}
