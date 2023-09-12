import { Silkscreen, Inter } from 'next/font/google'
import Script from 'next/script';
import { Metadata } from 'next';

import icon from '#/icon.png'

import './globals.css'

export const metadata: Metadata = {
  title: 'SneakySpeedyBoii',
  description: 'SneakySpeedyBoi\' website',
}

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-logo'
});
const inter = Inter({ subsets: ["latin"], variable: '--font-main' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>SneakySpeedyBoii</title>
      </head>
      <body className={`${silkscreen.variable} ${inter.variable}`}>{children}</body>
      <Script src="https://umami.sneakyspeedyboii.com/script.js" data-website-id="29d44082-53ff-46a3-84dd-251b81597524" />
    </html>
  )
}
