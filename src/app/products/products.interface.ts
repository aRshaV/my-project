import { Category } from './category.interface';

export interface Product {
    id: number;
    name: string;
    quantity: number;
    price?: string;
    category?: Category;
}
