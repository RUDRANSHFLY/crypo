import React from "react";
import Image from "next/image";
import { CoinProp } from "@/types";

interface CoinCardProp {
  indexId: number;
  coin: CoinProp;
}

const CoinCard = ({ coin, indexId }: CoinCardProp) => {
  return (
    <div
      className="bg-blue-800 w-80 h-80 flex flex-col justify-around text-white mb-5 rounded-md p-5"
      id={indexId.toString()}
    >
      <div>
        <div className="flex gap-2 items-center">
          <Image
            src={coin.item.large}
            alt={coin.item.name}
            width={40}
            height={40}
          />
          <h1>{coin.item.name}</h1>
        </div>
      </div>
      <div className="bg-blue-600 p-3 flex gap-2 rounded-s-2xl">
        <p>
          Price :
        </p>
        <p>$ {coin.item.data.price.toFixed(2)}</p>
      </div>
      <div className="flex gap-2">
        <p>
          Market Cap :
        </p>
        <p className="text-gray-300">

        {coin.item.data.market_cap}
        </p>
        </div>
      <div className={"bg-blue-950 w-full h-20 relative"}>
        <Image
          className="absolute inset-0 object-cover"
          src={coin.item.data.sparkline}
          alt={coin.item.name}
          fill
        />
      </div>
    </div>
  );
};

export default CoinCard;
