import React from 'react';
import { Star } from 'lucide-react';

const StarRating = () => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className="text-cyan-300 w-8 h-8"
          fill="#46BAC2"
        />
      ))}
    </div>
  );
};

export default StarRating;