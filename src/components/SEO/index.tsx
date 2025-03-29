
const SEO = () => {
  const structuredData = `{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Feelsafe Markone",
    "url": "https://www.feelsafemarkone.com",
    "logo": "https://www.feelsafemarkone.com/images/logotranswhite.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 8920898168",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.instagram.com/feelsafe_markone/",
      "https://in.linkedin.com/company/feelsafe-markone"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, Plot no 42, Shiv Park",
      "addressLocality": "Dwarka",
      "addressRegion": "Delhi",
      "postalCode": "110078",
      "addressCountry": "IN"
    },
    "description": "Feelsafe Markone provides cutting-edge website development, app development, custom CRM, ERP, and ERM solutions, along with marketing, social media marketing (SMM), and performance marketing services.",
    "keywords": "website development, app development, CRM, ERP, marketing, SMM, performance marketing, Feelsafe Markone",
    "foundingDate": "2020-01-01",
    "founder": {
      "@type": "Person",
      "name": "Vishal Shakya"
    }
  }`;

  const metadata = {
    title: "Feelsafe Markone - Digital Solutions for Growth and Security",
    description:
      "Feelsafe Markone offers professional website and app development services, custom CRM, ERP solutions, and cutting-edge marketing strategies including SMM and performance marketing. We help businesses grow with digital security and tailored development solutions.",
    robots: "index, follow",
    keywords:
      "website development, app development, CRM, ERP, digital marketing, SMM, performance marketing, security, Feelsafe Markone, custom development",
    openGraph: {
      title: "Feelsafe Markone - Digital Solutions for Growth and Security",
      description:
        "Professional website and app development, custom CRM, ERP solutions, and advanced marketing strategies to help your business grow.",
      type: "website",
      url: "https://www.feelsafemarkone.com",
      images: "https://www.feelsafemarkone.com/images/logotranswhite.png",
    },
    twitter: {
      card: "summary_large_image",
      title: "Feelsafe Markone - Digital Solutions for Growth and Security",
      description:
        "Get custom website, app development, CRM, and ERP services to ensure your business's growth with digital marketing strategies.",
      images: "https://www.feelsafemarkone.com/images/logotranswhite.png",
    },
  };

  return (
    <>
      {/* Meta Tags */}
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="robots" content={metadata.robots} />
      <meta name="keywords" content={metadata.keywords} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta
        property="og:description"
        content={metadata.openGraph.description}
      />
      <meta property="og:type" content={metadata.openGraph.type} />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:image" content={metadata.openGraph.images} />
      <meta name="twitter:card" content={metadata.twitter.card} />
      <meta name="twitter:title" content={metadata.twitter.title} />
      <meta name="twitter:description" content={metadata.twitter.description} />
      <meta name="twitter:image" content={metadata.twitter.images} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
    </>
  );
};

export default SEO;
