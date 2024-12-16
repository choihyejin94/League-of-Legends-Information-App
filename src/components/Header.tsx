import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 text-white text-center p-4">
      <nav>
        <ul className="flex items-center justify-around">
          <li>
            <Link href="/">홈</Link>
          </li>
          <li>
            <Link href="/champions">챔피언 목록</Link>
          </li>
          <li>
            <Link href="/items">아이템 목록</Link>
          </li>
          <li>
            <Link href="/rotation">챔피언 로테이션</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
