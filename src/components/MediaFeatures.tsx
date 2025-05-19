
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const MediaFeatures = () => {
  const mediaOutlets = [
    {
      name: "YourStory",
      logo: "/assets/images/yourstory-logo.png",
      fallback: "https://via.placeholder.com/150x60?text=YourStory",
      url: "https://yourstory.com"
    },
    {
      name: "Business Standard",
      logo: "/assets/images/business-standard-logo.png",
      fallback: "https://via.placeholder.com/150x60?text=Business+Standard",
      url: "https://www.business-standard.com"
    },
    {
      name: "ANI",
      logo: "/assets/images/ani-logo.png",
      fallback: "https://via.placeholder.com/150x60?text=ANI",
      url: "https://www.aninews.in"
    },
    {
      name: "The Times of India",
      logo: "/assets/images/times-of-india-logo.png",
      fallback: "https://via.placeholder.com/150x60?text=Times+of+India",
      url: "https://timesofindia.indiatimes.com"
    }
  ];

  return (
    <section id="featured" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Featured In</h2>
          <div className="h-1 w-20 bg-publicnext-purple mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mediaOutlets.map((media, index) => (
            <a 
              href={media.url} 
              target="_blank" 
              rel="noopener noreferrer"
              key={index}
              className="group"
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow group-hover:border-publicnext-purple">
                <CardContent className="flex flex-col items-center justify-center p-4 h-24 relative">
                  <img 
                    src={media.logo} 
                    alt={`${media.name} Logo`} 
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      // @ts-ignore - currentTarget is valid
                      e.currentTarget.onerror = null;
                      // @ts-ignore - currentTarget is valid
                      e.currentTarget.src = media.fallback;
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-6 w-6 text-publicnext-purple" />
                  </div>
                </CardContent>
              </Card>
              <p className="text-xs text-center mt-2 text-gray-500">{media.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaFeatures;
