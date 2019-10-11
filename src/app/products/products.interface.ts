import { Category } from './category.interface';

export interface Products {
    id: number;
    name: string;
    quantity: number;
    price?: string;
    category?: Category;
}
