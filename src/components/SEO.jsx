import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "Amar Murmu | Web Designer & Full Stack Developer from India",
  description = "I'm Amar Murmu, a professional Web Designer and Full Stack Developer from India with 3+ years of experience. Expert in Figma, React.js, Node.js, and creating visually stunning, user-friendly websites. Portfolio showcasing creative web design and development projects.",
  keywords = "Amar Murmu, amarmurmu, amar, murmu, amarcode, amar code, web designer, web developer, full stack developer, frontend developer, React developer, Node.js developer, UI/UX designer, Figma expert, Indian web designer, Indian developer, portfolio website, freelance web designer, website development, web development India, creative web designer, professional web developer, best web designer India",
  image = "/og-image.png"
}) => {
  const siteUrl = "https://amar-portfolio-six.vercel.app";
  const authorName = "Amar Murmu";
  const twitterHandle = "@AmarMurmu001";
  const location = "India";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={authorName} />
      <link rel="canonical" href={siteUrl} />

      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content={location} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Amar Murmu Portfolio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Additional Meta Tags for SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#000000" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data for Rich Results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": siteUrl,
          "name": authorName,
          "alternateName": ["amarmurmu", "amarcode", "amar code"],
          "givenName": "Amar",
          "familyName": "Murmu",
          "gender": "Male",
          "nationality": "Indian",
          "jobTitle": ["Web Designer", "Full Stack Developer", "UI/UX Designer"],
          "description": description,
          "image": `${siteUrl}${image}`,
          "url": siteUrl,
          "sameAs": [
            "https://github.com/amarmurmu001",
            // Add your other social media profiles here
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          },
          "knowsAbout": [
            "Web Design",
            "Web Development",
            "UI/UX Design",
            "React.js",
            "Node.js",
            "Figma",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Responsive Design",
            "Frontend Development",
            "Backend Development"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Web Designer and Developer",
            "occupationLocation": {
              "@type": "Country",
              "name": "India"
            },
            "estimatedSalary": {
              "@type": "MonetaryAmountDistribution",
              "currency": "INR",
              "duration": "P1Y"
            }
          }
        })}
      </script>

      {/* Professional Information Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          "url": siteUrl,
          "name": title,
          "description": description,
          "publisher": {
            "@type": "Person",
            "name": authorName
          },
          "inLanguage": "en-IN",
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>

      {/* Portfolio Work Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "WebSite",
              "position": 1,
              "name": "ScriptGenius",
              "description": "AI-powered script generation tool",
              "url": "https://script-generator-iota.vercel.app/"
            },
            {
              "@type": "WebSite",
              "position": 2,
              "name": "Alumni Association",
              "description": "Comprehensive platform for college alumni",
              "url": "https://alumni-frontend-five.vercel.app/"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 