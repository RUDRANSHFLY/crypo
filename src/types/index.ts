export interface CoinProp {
    item: {
        id: string,
        coin_id: number,
        name: string,
        large: string,
        market_cap_rank: number,
        price_btc: string,
        score: number,
        symbol: string,
        thumb: string,
        small: string,
        slug: string,
        data: {
            price: number,
            price_btc: string,
            sparkline: string,
            market_cap: string,
            market_cap_btc: string,
            total_volume: string,
            total_volume_btc: string,
        }
    }
}