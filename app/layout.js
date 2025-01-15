import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: 'Exam MCQ Hub',
  description: 'For all compitative exams',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
