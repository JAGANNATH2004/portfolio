import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Jagannath Vungarala | Data Science",
  description = "Personal website of Jagannath Vungarala, an aspiring Data Scientist based in Bengaluru, India.",
  image = "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jagannath Vungarala",
          "url": "https://your-website.com",
          "sameAs": [
            "https://www.linkedin.com/in/jagannath-vungarala-437345250/",
            "https://github.com/JAGANNATH2004"
          ],
          "jobTitle": "Student",
          "worksFor": {
            "@type": "Organization",
            "name": "Presidency University"
          },
          "image": image,
          "description": description
        })}
      </script>
    </Helmet>
  );
};

export default SEO;