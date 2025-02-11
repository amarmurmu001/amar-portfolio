import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Amar Murmu | Web Designer & Developer",
  description = "Web designer from India with 3 years of experience. Specializing in Figma, creating visually stunning and user-friendly websites with seamless user experiences.",
  keywords = "web design, web development, Figma, UI/UX, frontend developer, React developer, India",
  image = "/og-image.png" // Add your OG image in the public folder
}) => {
  const siteUrl = "https://amar-portfolio-six.vercel.app/"; // Replace with your actual domain

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Amar Murmu" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Amar Murmu Portfolio" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="robots" content="index, follow" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Amar Murmu",
          "url": siteUrl,
          "jobTitle": "Web Designer & Developer",
          "description": description,
          "image": `${siteUrl}${image}`,
          "sameAs": [
            "https://github.com/amarmurmu001",
            // Add other social media links
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 