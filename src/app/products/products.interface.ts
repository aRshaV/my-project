import { Category } from './category.interface';

export interface Products {
    name: string;
    quantity: number;
    price?: string;
    category?: Category;
}
