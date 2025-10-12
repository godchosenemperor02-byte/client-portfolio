import "./globals.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact"

export const metadata = {
  title: "Engr. Jason McCallister | Mechanical Engineer Portfolio",
  description:
    "Mechanical Engineer specializing in CAD design, prototyping, and product development. Explore my engineering projects and contact me for collaborations.",
  keywords: [
    "Mechanical Engineer",
    "CAD Design",
    "Product Design",
    "Engineering Portfolio",
    "SolidWorks",
    "Mechanical Projects",
  ],
  authors: [{ name: "Engr. Jason McCallister" }],
  openGraph: {
    title: "Engr. Jason McCallister | Mechanical Engineer Portfolio",
    description:
      "Mechanical Engineer specializing in CAD design, prototyping, and product development.",
    url: "https://jason-mccallister.com", // replace with actual domain
    siteName: "Engr. Jason McCallister Portfolio",
    images: [
      {
        url: "/man.jpg", // add image to /public
        width: 1200,
        height: 630,
        alt: "Engr. Jason McCallister Mechanical Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engr. Jason McCallister | Mechanical Engineer Portfolio",
    description:
      "Explore my mechanical engineering projects and CAD designs.",
    images: ["/man.jpg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar  />
        {children}
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Engr. Jason McCallister",
      jobTitle: "Mechanical Engineer",
      url: "https://jasonmccallister.com",
    }),
  }}
/>
  <Contact />
      </body>
    </html>
  );
}
