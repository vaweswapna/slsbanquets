



"use client";
import Script from "next/script";

export default function SEO() {
  return (
    <>
      <Script
        id="ld-local-business"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "EventVenue"],
            name: "SLS Banquets",
            image: [
              "https://sls-banquets.vercel.app/heroimg1.jpg",
              "https://sls-banquets.vercel.app/heroimg2.jpg",
              "https://sls-banquets.vercel.app/heroimg3.jpg",
              "https://sls-banquets.vercel.app/galleryimg1.jpg",
              "https://sls-banquets.vercel.app/galleryimg2.jpg",
              "https://sls-banquets.vercel.app/galleryimg3.jpg",
              "https://sls-banquets.vercel.app/galleryimg4.jpg",
              "https://sls-banquets.vercel.app/galleryimg5.jpg"
            ],
            "@id": "https://sls-banquets.vercel.app",
            url: "https://sls-banquets.vercel.app",
            telephone: "+917672024124",
            alternateName: ["SLS Banquets", "SLSBanquets"],
            priceRange: "₹₹",
            paymentAccepted: ["Cash", "UPI", "Credit Card", "Debit Card"],
            areaServed: { "@type": "AdministrativeArea", name: "Vijayawada" },
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "S L S ENCLAVE, DNO: 77-149-20, Plot No: 137, Journalist Colony, Rajiv-Kandrika Main Rd (48 R Bus route), Payakapuram",
              addressLocality: "Vijayawada",
              addressRegion: "Andhra Pradesh",
              postalCode: "520010",
              addressCountry: "IN",
            },
            geo: { "@type": "GeoCoordinates", latitude: 16.555263, longitude: 80.650418 },
            hasMap: "https://www.google.com/maps?q=16.555263,80.650418(SLS+Banquets)",
            maximumAttendeeCapacity: 100,
            amenityFeature: [
              { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
              { "@type": "LocationFeatureSpecification", name: "Parking Available", value: true },
              { "@type": "LocationFeatureSpecification", name: "Power Backup", value: true },
              { "@type": "LocationFeatureSpecification", name: "Stage & Lighting", value: true }
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "22:00",
              },
            ],
          }),
        }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you have a mini banquet hall for 100 guests in Vijayawada?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. SLS Banquets offers an AC mini function hall ideal for 50–100 guests for engagements, naming ceremonies, birthdays, and intimate weddings.",
                },
              },
              {
                "@type": "Question",
                name: "Is SLS Banquets an affordable function hall in Vijayawada?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We are budget-friendly with flexible packages and options for decoration and catering.",
                },
              },
              {
                "@type": "Question",
                name: "Which events do you host?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Engagements, naming ceremonies, birthdays, receptions, anniversaries, private parties, and corporate events.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
