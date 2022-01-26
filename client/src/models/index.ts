export interface PageProduct
{
  slug: string;
  title: string;
  image: string;
  description: string;
  groups?: [PageProductGroup];
  products?: [Product];
}


export interface PageProductGroup
{
  title: string;
  products: [Product];
}

export interface Product
{
  title: string;
  description: string;
  price: number;
  type: string;
  duration: number;
}
