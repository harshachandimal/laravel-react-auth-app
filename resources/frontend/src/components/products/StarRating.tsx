/**
 * Small, simple star rating (rounded to nearest whole star)
 */
interface IStarRatingProps {
    rating: number;
}




export const StarRating: React.FC<IStarRatingProps> = ({ rating }) => {
    const filled = Math.round(rating); // keep it simple
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className={i < filled ? 'h-4 w-4 fill-yellow-400' : 'h-4 w-4 fill-slate-300'}
                >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
            <span className="ml-1 text-xs text-gray-500">{rating.toFixed(1)}</span>
        </div>
    );
};
