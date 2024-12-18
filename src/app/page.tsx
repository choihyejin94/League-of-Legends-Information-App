import Image from "next/image";
import championList from "../public/championList.webp";
import championRotation from "../public/championRotation.webp";
import item from "../public/item.webp";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="text-center w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-lg shadow-lg">
          리그 오브 레전드 정보 앱
        </h1>
        <p className="text-xl m-4 text-gray-400">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
        <div>
          <Link href="/champions">
            <div className="mb-6">
              <Image
                src={championList}
                alt="championList Image"
                width={400}
                height={300}
              />
              <p className="text-orange-500 mt-4">챔피언 목록 보기</p>
            </div>
          </Link>
          <Link href="/rotation">
            <div className="mb-6">
              <Image
                src={championRotation}
                alt="championRotation Image"
                width={400}
                height={300}
              />
              <p className="text-orange-500 mt-4">금주 로테이션 확인</p>
            </div>
          </Link>
          <Link href="/items">
            <div>
              <Image src={item} alt="item Image" width={400} height={300} />
              <p className="text-orange-500 mt-4">아이템 목록 보기</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
