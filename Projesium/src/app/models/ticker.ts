import { Bids } from './bids';

export interface ITicker {
    lastUpdateId: number;
    bids: Bids[];
    asks: Bids[];
}
