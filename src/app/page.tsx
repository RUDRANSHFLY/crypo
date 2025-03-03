"use client"

import CoinList from "@/components/CoinList";
import Loading from "@/components/Loading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavBar from "@/components/NavBar";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="bg-blue-300 w-full min-h-screen py-5 px-2">
      <MaxWidthWrapper>
        <NavBar />
        <Suspense fallback={<Loading />}>
           <CoinList />
        </Suspense>
      </MaxWidthWrapper>
    </main>
  );
}
