"use client";

import { ChampionsData } from "@/types/ChampionsType";
import fetchChampionList from "@/utils/serverApi";
import Image from "next/image";
import { useEffect, useState } from "react";

const RotationPage = () => {
  const [champion, setChampion] = useState<ChampionsData>({});
  const [rotation, setRotation] = useState<number[]>([]);

  useEffect(() => {
    const fetchChampionRotation = async () => {
      const response = await fetch("/api/rotation");
      const championRotation = await response.json();
      const rotationData = championRotation.freeChampionIds;
      setRotation(rotationData);
    };

    const fetchChampion = async () => {
      const championData = await fetchChampionList();
      if (championData) {
        setChampion(championData);
      }
    };

    fetchChampionRotation();
    fetchChampion();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-extrabold text-white text-center mb-10 bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-lg shadow-lg">
        챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)
      </h1>
      <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-10">
        {rotation.map((champId) => {
          const matchedChamp = Object.values(champion).find(
            (champ) => champ.key === champId.toString()
          );
          return matchedChamp ? (
            <li
              key={matchedChamp.key}
              className="border border-white rounded-lg overflow-hidden"
            >
              <div className="flex justify-center items-center p-4">
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${matchedChamp.id}_0.jpg`}
                  alt={matchedChamp.name}
                  width={200}
                  height={200}
                />
              </div>
              <h3 className="text-xl font-bold text-red-600 text-center m-2">
                {matchedChamp.name}
              </h3>
              <p className="text-center mb-4">{matchedChamp.title}</p>
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default RotationPage;
