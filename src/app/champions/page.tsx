"use client";

import { ChampionsData } from "@/types/ChampionsType";
import fetchChampionList from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

const fetchChampion = async (): Promise<ChampionsData> => {
  const data = await fetchChampionList();
  return data!;
}

const ChampionsPage = () => {
  const { data, error, isLoading } = useQuery<ChampionsData>({
    queryKey: ["champions"],
    queryFn: fetchChampion,
  });

  if(isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  
  if (!data) return <div>No champions found.</div>;
  
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-extrabold text-white text-center mb-10 bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-lg shadow-lg">
        챔피언 목록
      </h1>{" "}
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {Object.keys(data).map((key) => {
          const champion = data[key]
          return (
            <li
              key={key}
              className="border border-white rounded-lg overflow-hidden"
            >
              <Link href={`/champions/${champion.id}`}>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                  alt={champion.name}
                  width={300}
                  height={300}
                />
                <h2 className="text-xl font-bold text-red-600 text-center m-2">
                  {champion.name}
                </h2>
                <p className="text-center mb-4">{champion.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChampionsPage;
