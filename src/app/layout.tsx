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
    <html className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#091c2be8" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#091c2be8" />
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
