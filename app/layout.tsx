import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "CopilotAI — Real-Time AI Interview Copilot",
  description: "AI-powered interview assistant. Detects questions, streams answers, invisible to screen share.",
  openGraph: {
    title: "CopilotAI — Real-Time AI Interview Copilot",
    description: "Ace every interview with AI that thinks faster than you. Detects questions in real time and whispers perfect answers.",
    type: "website",
    url: "https://copilotai.io",
    // images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CopilotAI — Real-Time AI Interview Copilot",
    description: "AI-powered interview assistant. Detects questions, streams answers, invisible to screen share.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
