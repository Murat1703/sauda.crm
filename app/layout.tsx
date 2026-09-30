import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import SideBar from "@/components/Sidebar";


export const metadata: Metadata = {
  title: "Sauda - Закупки",
  description: "Страница для поставщиков и проведения закупок",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html 
      lang="en" 
      className={``}
      cz-shortcut-listen="true"
    >
      <body>
        <Header />
        <main className={"layout"}>
          <SideBar />
          <div className={"content"}>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
