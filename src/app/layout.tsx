import {
  HydratedQueryClientProvider,
  LoaderWrapper,
} from "@/components";
import { themeConfig } from "@/utils/theme";
import { ConfigProvider } from "antd";
import enUS from "antd/lib/locale/en_US";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Script from "next/script";

const title = "Ashish";
const description = "Portfolio";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <head>

        <Script
          id={"gtag"}
          async
          strategy={"lazyOnload"}
          src={"https://www.googletagmanager.com/gtag/js?id=G-WLSG3YPF4M"}
        />
        <Script
          id={"gtag-config"}
          strategy={"afterInteractive"}
          async
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WLSG3YPF4M');
            `,
          }}
        />
      </head>
      <ConfigProvider
        theme={{
          ...themeConfig,
          token: {
            ...themeConfig.token,
            fontFamily: "",
          },
        }}
        locale={enUS}
      >
        <HydratedQueryClientProvider>
          <body>
            <Suspense>
              <LoaderWrapper>
                {children}
              </LoaderWrapper>
            </Suspense>
          </body>
        </HydratedQueryClientProvider>
      </ConfigProvider>
    </html>
  );
}
