/**
 * Interfaces
 */
interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    originalPrice?: number;
    rating: number; // 0-5
    reviews: number;
    inStock: boolean;
    imageUrl: string;
    badges?: string[];
}
