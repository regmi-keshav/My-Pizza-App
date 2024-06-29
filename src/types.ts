export interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface CartItem extends Pizza {
  quantity: number;
}
