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
      <Script async src="https://umami.sneakyspeedyboii.com/script.js" data-website-id="a3290c6c-2952-4eb3-9d48-9d7c8a146269" />
    </html>
  )
}
