export type GradeType = 'hg' | 'mg' | 'sd' | 'pg' | 'rg';

export interface Product {
  id: number;
  name: string;
  price: number;
  grade: GradeType;
  link: string;
}

export interface CartItem extends Product {
  quantity: number;
}
