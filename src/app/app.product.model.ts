export class Product {

    constructor(
      public productRowId: number,
      public productId: string,
      public productName: string,
      public categoryName: string,
      public manufacturer: string,
      public description: string,
      public basePrice: number
    ){}
  }
  export const Categories = [
    'Electronics', 'Electrical', 'Food'
  ];
  
  export const Manufacturers = [
    'HP', 'IBM', 'Bajaj', 'Phillipse', 'Parle', 'TATA'
  ];  