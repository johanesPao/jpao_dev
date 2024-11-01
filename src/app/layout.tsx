import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";

const libreBarcode = localFont({
  src: "./fonts/LibreBarcode128Text-Regular.ttf",
  variable: "--font-libre-barcode",
});

const bungeeHairline = localFont({
  src: "./fonts/BungeeHairline-Regular.ttf",
  variable: "--font-bungee-hairline",
});

const novaMono = localFont({
  src: "./fonts/NovaMono-Regular.ttf",
  variable: "--font-nova-mono",
});

const cozetteMono = localFont({
  src: "./fonts/CozetteVector.woff",
  variable: "--font-cozette",
});

const monaspaceNeonRegular = localFont({
  src: "./fonts/MonaspaceNeon-Regular.woff",
  variable: "--font-monaspaceNeonRegular",
});

export const metadata: Metadata = {
  title: {
    template: "johanespao.dev | %s",
    default: "johanespao.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBarcode.variable} ${bungeeHairline.variable} ${novaMono.variable} ${cozetteMono.variable} ${monaspaceNeonRegular.variable} antialiasing md:max-w-[1024px] p-[64px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
