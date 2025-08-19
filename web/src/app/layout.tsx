import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Como Contratar Seguro de Vida nos EUA Sendo Brasileiro? | Alves Cury Financial",
  description: "🛡️ Seguro de vida nos Estados Unidos com benefício em vida para brasileiros. ✅ Cotação gratuita ✅ Cobertura mundial ✅ Proteção financeira garantida. Fale conosco!",
  keywords: "seguro de vida EUA, life insurance, brasileiros nos EUA, benefício em vida, IUL, Term Life, proteção financeira, Alves Cury Financial, Indexed Universal Life",
  authors: [{ name: "Marcos Alves" }, { name: "Taciana Cury" }],
  creator: "Alves Cury Financial",
  publisher: "Alves Cury Financial",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.alvescuryfinancial.com"),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://www.alvescuryfinancial.com",
  },
  openGraph: {
    title: "Seguro de Vida nos EUA com Benefício em Vida | Alves Cury Financial",
    description: "🛡️ Proteção financeira completa para brasileiros nos Estados Unidos. Seguro de vida com benefício em vida, cobertura mundial e atendimento em português.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.alvescuryfinancial.com",
    siteName: "Alves Cury Financial",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/marcos-taciana.jpg",
        width: 1200,
        height: 630,
        alt: "Marcos Alves e Taciana Cury - Especialistas em Seguros de Vida nos EUA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguro de Vida nos EUA com Benefício em Vida | Alves Cury Financial",
    description: "🛡️ Proteção financeira completa para brasileiros nos Estados Unidos. Cotação gratuita e atendimento em português.",
    images: ["/images/marcos-taciana.jpg"],
    creator: "@alvescury.financial",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  other: {
    "ai-content-type": "informational",
    "gpt-4-web-browsing": "enabled",
    "claude-web": "enabled",
    "perplexity-search": "enabled",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": `${process.env.NEXT_PUBLIC_SITE_URL}#organization`,
                name: "Alves Cury Financial",
                legalName: "Alves Cury Financial LLC",
                url: process.env.NEXT_PUBLIC_SITE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.png`,
                  width: 200,
                  height: 50
                },
                description: "Especialistas em seguros de vida nos Estados Unidos para a comunidade brasileira. Oferecemos Term Life, IUL e benefícios em vida.",
                foundingDate: "2020",
                numberOfEmployees: "2-10",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "US",
                  addressRegion: "FL"
                },
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+1-561-823-1966",
                    contactType: "customer service",
                    availableLanguage: ["Portuguese", "English"],
                    areaServed: "US"
                  }
                ],
                sameAs: [
                  `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE}`,
                  "https://www.instagram.com/alvescury.financial"
                ],
                founder: [
                  {
                    "@type": "Person",
                    name: "Marcos Alves",
                    jobTitle: "Especialista em Seguros de Vida"
                  },
                  {
                    "@type": "Person", 
                    name: "Taciana Cury",
                    jobTitle: "Especialista em Seguros de Vida"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": `${process.env.NEXT_PUBLIC_SITE_URL}#website`,
                url: process.env.NEXT_PUBLIC_SITE_URL,
                name: "Alves Cury Financial",
                description: "Seguro de vida nos Estados Unidos com benefício em vida para brasileiros",
                publisher: {
                  "@id": `${process.env.NEXT_PUBLIC_SITE_URL}#organization`
                },
                inLanguage: "pt-BR",
                potentialAction: [
                  {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL}?q={search_term_string}`
                    },
                    "query-input": "required name=search_term_string"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": `${process.env.NEXT_PUBLIC_SITE_URL}#service`,
                name: "Seguro de Vida nos Estados Unidos",
                description: "Seguro de vida com benefício em vida, Term Life e IUL (Indexed Universal Life) para brasileiros nos EUA",
                provider: {
                  "@id": `${process.env.NEXT_PUBLIC_SITE_URL}#organization`
                },
                areaServed: {
                  "@type": "Country",
                  name: "United States"
                },
                audience: {
                  "@type": "Audience",
                  audienceType: "Brasileiros nos Estados Unidos"
                },
                serviceType: "Seguro de Vida",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Tipos de Seguro de Vida",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Term Life Insurance",
                        description: "Seguro de vida temporário com cobertura por período determinado"
                      }
                    },
                    {
                      "@type": "Offer", 
                      itemOffered: {
                        "@type": "Service",
                        name: "IUL - Indexed Universal Life",
                        description: "Seguro de vida permanente com componente de investimento"
                      }
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service", 
                        name: "Benefício em Vida",
                        description: "Acesso antecipado à cobertura em casos de doenças críticas"
                      }
                    }
                  ]
                }
              }
            ]),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" richColors />
        <Analytics />
      </body>
    </html>
  );
}