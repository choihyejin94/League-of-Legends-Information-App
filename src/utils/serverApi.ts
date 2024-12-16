"use server";

import { ChampionsData } from "@/types/ChampionsType";

const fetchChampionList = async (): Promise<
  ChampionsData | undefined> => {
  try {
    // Data Dragon API 버전 정보 가져오기
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const data = await res.json();
    // 최신 버전 정보
    const latestData = data[0];

    // 챔피언 목록 데이터 가져오기
    const championRes = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestData}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: 86400,
        },
      }
    );
    const championData = await championRes.json();
    return championData.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const fetchItemList = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data = await res.json();
  // 최신 버전 정보
  const latestData = data[0];

  const itemRes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestData}/data/ko_KR/item.json`
  );
  const itemData = await itemRes.json();
  return itemData.data;
};

export default fetchChampionList;