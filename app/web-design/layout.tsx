import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "C.D. Totten - Web Developer",
  description: "Professional web design services for local businesses in Central Florida, United States",
}

export default function WebDesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={inter.className}>
      {children}
    </section>
  )
}

