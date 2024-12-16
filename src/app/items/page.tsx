import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";

const ItemsPage = async () => {
  const itemData = await fetchItemList();

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-extrabold text-white text-center mb-10 bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-lg shadow-lg">
        아이템 목록
      </h1>
      <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8">
        {Object.keys(itemData).map((name) => {
          const item = itemData[name];
          return (
            <li
              key={name}
              className="border border-white rounded-lg overflow-hidden"
            >
              <div className="flex justify-center items-center p-4">
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${item.image.full}`}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-bold text-red-600 text-center m-2">
                {item.name}
              </h2>
              <p className="text-center mb-4">{item.plaintext}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemsPage;
