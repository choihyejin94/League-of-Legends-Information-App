import Image from "next/image";

const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const detailRes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion/${params.id}.json`
  );
  const detailData = await detailRes.json();
  const champion = detailData.data[params.id];

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-4xl font-extrabold text-white text-center mb-6 bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-lg shadow-lg">
        {champion.name}
      </h2>
      <div className="flex flex-col items-center mb-6">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          alt={champion.name}
          width={500}
          height={500}
          className="rounded-lg shadow-lg mb-4"
        />
      </div>
      <p className="text-2xl text-center text-gray-300 font-bold mb-2">
        {champion.title}
      </p>
      <p className="text-gray-200 mb-10">{champion.blurb}</p>
      <h3 className="text-2xl font-bold text-white mb-4">스탯</h3>
      <ul className="text-gray-300">
        <li className="mb-2">
          공격력: <span className="font-semibold">{champion.info.attack}</span>
        </li>
        <li className="mb-2">
          방어력: <span className="font-semibold">{champion.info.defense}</span>
        </li>
        <li className="mb-2">
          마법력: <span className="font-semibold">{champion.info.magic}</span>
        </li>
        <li className="mb-2">
          난이도:{" "}
          <span className="font-semibold">{champion.info.difficulty}</span>
        </li>
      </ul>
    </div>
  );
};

export default ChampionDetailPage;
