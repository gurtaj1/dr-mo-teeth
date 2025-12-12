import { Star } from "lucide-react";
import Image from "next/image";
import GoogleIcon from "@/app/svg-components/google-icon";
import { cn } from "@/lib/utils";

interface GoogleReviewCardProps {
  name: string;
  date: string;
  rating: number; // 1-5
  text: string;
  avatar?: string; // Optional avatar URL
}

const GoogleReviewCard = ({
  name,
  date,
  rating,
  text,
  avatar,
}: GoogleReviewCardProps) => {
  // Generate initials from name if no avatar is provided
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  // Array to render stars
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div className="bg-white rounded-lg shadow-md p-5 h-full flex flex-col relative">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-semibold text-sm shrink-0">
            {initials}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm truncate">
            {name}
          </h4>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
        <GoogleIcon className="w-5 h-5 absolute top-5 right-5" />
      </div>

      {/* Rating */}
      <div className="flex gap-0.5 mb-3" role="img" aria-label={`${rating} out of 5 stars`}>
        {stars.map((filled, index) => (
          <Star
            key={index}
            className={cn(
              "w-4 h-4",
              filled
                ? "fill-dental-googleYellowOrange text-dental-googleYellowOrange" // Google yellowish-orange
                : "fill-gray-200 text-gray-200"
            )}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-6 italic">
          &quot;{text}&quot;
        </p>
      </div>
    </div>
  );
};

export default GoogleReviewCard;
