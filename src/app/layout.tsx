import "@/app/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QueryProvider from "@/components/QueryProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "League of Legends Information App",
  description: "Rion API를 활용한 리그 오브 레전드 정보 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <Header />
          <main className="flex justify-center items-center w-full h-full">
            {children}
          </main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
