export interface CartItem {
    id: string | number;
    name: string;
    price: number;
    qty: number;
    stock?: number;
    description?: string;
}

export interface CartState {
    items: CartItem[];
}
