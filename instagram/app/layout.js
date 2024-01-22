import "./globals.css";

export const metadata = {
  title: "Instagram Clone",
  description: "Instagram Clone by Afifudin Maarif",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center">
          <div className="w-[375px] h-screen bg-white">{children}</div>
        </div>
      </body>
    </html>
  );
}
