"use client";
import fetchCoins from "@/server/fetchCoins";
import React, { useEffect, useState } from "react";
import CoinCard from "./CoinCard";
import { CoinProp } from "@/types";
import { Button } from "./ui/button";
import { RefreshCcw } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Loading from "./Loading";

const CoinList = () => {
  const [coinsArray, setCoinsArray] = useState<CoinProp[]>([]);
  const [filteredCoins, setFilteredCoins] = useState<CoinProp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams() ;
  const searchQuery = searchParams.get("coin") || "";

  const getTrendingCoins = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCoins();
      setCoinsArray(data["coins"]);
      setFilteredCoins(data["coins"]);
      console.log(data);
    } catch (error) {
      setError(`Failed to fetch trending coins. Please try again. ${error} `);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTrendingCoins();
  }, []);


  useEffect(() => {
    const filtered = coinsArray.filter((coin) => coin.item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredCoins(filtered);
  }, [searchQuery, coinsArray]);
  

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <p className="text-red-500 mb-4">{error}</p>
        <Button
          onClick={getTrendingCoins}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md cursor-pointer"
        >
          Retry
        </Button>
      </div>
    );
  }

  if(coinsArray.length === 0){
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <p className="text-red-500">No coins found</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center w-full mt-18 md:mt-10">
      <Button
        className="fixed top-24 right-4 md:top-14 md:right-5 cursor-pointer z-50 flex justify-center items-centerno"
        disabled={loading}
        onClick={getTrendingCoins}
      >
        <RefreshCcw />
        Refersh
      </Button>
      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 place-items-center w-full">
        {filteredCoins.map((coin, index) => (
          <CoinCard indexId={index} key={index} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default CoinList;
