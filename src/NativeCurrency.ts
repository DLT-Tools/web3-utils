import INativeCurrency from './INativeCurrency';

export default class NativeCurrency implements INativeCurrency {
    name: string;
    symbol: string;
    decimals: number;

    constructor(name_: string, symbol_: string, decimals_: number) {
        this.name = name_;
        this.symbol = symbol_;
        this.decimals = decimals_;
    }
}