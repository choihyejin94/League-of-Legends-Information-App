import { ChampionRotation } from "@/types/ChampionRotationType";
const riotKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;

export async function getChampionRotation() {

  const url = "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";
  const headers = {
    "X-Riot-Token": riotKey!,
  };
  const res = await fetch(url, { headers });
  const data = await res.json();

  // api 에서 가져온 data 배열
  const championRotation: ChampionRotation = {
    freeChampionIds: data.freeChampionIds,
    freeChampionIdsForNewPlayers: data.freeChampionIdsForNewPlayers,
    maxNewPlayerLevel: data.maxNewPlayerLevel,
  };

  // JSON 형식으로 내보내기
    return championRotation;
}
