<H1>24.12.11~24.12.19</H1>
<p>👼🏻멤버 구성👼🏻</p>
<li>팀장이자 팀원 😎  : 최혜진 - 프로젝트 셋업, 프로젝트 구조, 메인 페이지 및 레이아웃 구성, API 키 발급 및 환경 변수 설정, Vercel 배포 등 모든 것</li>

---

<p>⚙️개발 가이드</p>
<li>Next.js와 TypeScript로 프로젝트 셋업</li>
<li>스타일링은 tailwind css 사용</li>
<li>API 사용위한 타입 정의</li>
<li>Vercel 이용하여 배포</li>

---

<h2>📌주요 구현사항</h2>
<p>🐥프로젝트 셋업, 기본 구성</p>
<li>Next.js와 TypeScript 사용하여 프로젝트 설정</li>
<li>Tailwind CSS 설치하여 스타일링</li>
<li>기본 Layout 구성 Navigation 메뉴 추가</li>
<li>SSG 사용하여 빠른 로딩 속도 제공</li>
<br> 
<br>
<p>🐥Riot API 키 발급 및 데이터 Fetching</p>
<li>API 사용위한 type 정의</li>
<li>Server Actions 활용하여 서버 컴포넌트 내에서 데이터 페칭</li>
<li>Route Handlers 활용하여 클라이언트 컴포넌트 내에서 데이터 페칭</li>
<br> 
<br>
<p>🐥각 페이지 별 렌더링 방식</p>
<li>챔피언 목록 페이지: ISR</li>
<li>챔피언 상세 페이지: 동적 렌더링 방식 구현</li>
<li>챔피언 로테이션 페이지: 클라이언트 사이드 렌더링 방식 구현</li>
<li>아이템 목록 페이지: SSG</li>
<br> 
<br>
<p>🐥배포 및 최종 스타일링</p>
<li>최종 점검 및 최종 스타일링</li>
<li>Vercel 배포</li>

---

<h2>😱트러블슈팅 해결 결과만 끄적끄적..</h2>
<p>🐤CRS 렌더링 구현 시 Route Handlers 활용법</p> [🔍링크](https://daisy-hj.tistory.com/115)
<li>Next.js에서는 환경변수 사용 시 NEXT_PUBLIC_를 앞에 붙여야 된다!</li>
<li>server에서 client로 바로 api를 가지고 올 수 없다- 엔드포인트 호출해서 데이터 가지고 오기</li>
<br>
<br>
<p>🐤ISR로 API 가지고 올 때 문제점</p> [🔍링크](https://daisy-hj.tistory.com/115)
<li>타입 정의시 thunder client 익스텐션 이용하여 데이터 확인하면 편리함</li>
<li>외부 이미지 도메인 이용 시 next.config.mjs 파일에서 설정하고 사용해야 함</li>
<br>
<br>
<p>🐤동적 렌더링 방식 구현시 어려웠던 것들</p> [🔍링크](https://daisy-hj.tistory.com/116)
<li>원하는 챔피언 클릭 시 상세페이지로 이동할 때는 Link태그로 나머지 태그들을 감싸면 된다!</li>
<li>params로 해당하는 챔피언 ID가지고 오기</li>
<br>
<br>
<p>🐤배포 전 오류들 해결하기</p> [🔍링크](https://daisy-hj.tistory.com/118)
<li>타입 오류난 것들 일단 렌더링은 되서 무시하고 배포했더니 빌드가 안되서 전면 재수정-</li>
<li>서버 사이드 렌더링에서 useQuery사용하려해서 오류- 컴포넌트 만들어서 children 적용하기</li>
<li>배포 시 환경변수 적용안해서 렌더링 오류- API 키 재발급 후 vercel 환경변수 설정</li>



---
### [🔍배포용링크](https://league-of-legends-information-8tudq95uq-choihyejins-projects.vercel.app/)
![스크린샷 2024-12-18 오후 2 57 30](https://github.com/user-attachments/assets/970e0707-6ff5-454c-878d-d77c4a67cd96)
![스크린샷 2024-12-18 오후 2 57 48](https://github.com/user-attachments/assets/1e905954-7acc-45f4-ac1d-5ae3b3c23484)
![스크린샷 2024-12-18 오후 2 58 05](https://github.com/user-attachments/assets/77612ba1-32fe-4412-bcbc-c75376487d63)
![스크린샷 2024-12-18 오후 2 58 15](https://github.com/user-attachments/assets/64d96fb4-984a-4534-a5ae-a420c26613d5)
![스크린샷 2024-12-18 오후 2 58 28](https://github.com/user-attachments/assets/7813150c-d18d-4335-a6ce-858ef9e6290c)

