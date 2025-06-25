export interface Product {
  id: string;
  title: string;
  categoryId: string;
  categoryName: string;
  price: number;
  packages: number;
  packagesTitle: string;
  thumbnail: string;
  relatedProd: string[];
}
export interface Categoires {
  id: string;
  name: string;
}

export const categories: Categoires[] = [
  {
    id: 'c1',
    name: 'Fruits & Vegetables',
  },
  {
    id: 'c2',
    name: 'Beverages',
  },
  {
    id: 'c3',
    name: 'Frozen',
  },
  {
    id: 'c4',
    name: 'Pantry',
  },
  {
    id: 'c5',
    name: 'Groceries',
  },
  {
    id: 'c6',
    name: 'Meat',
  },
  {
    id: 'c7',
    name: 'Cheese',
  },
];
export const products: Product[] = [
  {
    id: 'p1',
    title: 'Organic Banana',
    categoryId: 'c1',
    categoryName: 'Fruits & Vegetables',
    thumbnail: require('../assests/images/p1.jpg'),
    price: 0.27,
    packages: 1,
    packagesTitle: 'banana',
    relatedProd: [
      require('../assests/images/p2.jpg'),
      require('../assests/images/p3.jpg'),
    ],
  },
  {
    id: 'p2',
    title: 'Medium Hass Avocado',
    categoryId: 'c1',
    categoryName: 'Fruits & Vegetables',
    thumbnail: require('../assests/images/p2.jpg'),
    price: 2.21,
    packages: 1,
    packagesTitle: 'avocado',
    relatedProd: [
      require('../assests/images/p1.jpg'),
      require('../assests/images/p3.jpg'),
    ],
  },
  {
    id: 'p3',
    title: 'Large tomatoes Hot House',
    categoryId: 'c1',
    categoryName: 'Fruits & Vegetables',
    thumbnail: require('../assests/images/p3.jpg'),
    price: 1.04,
    packages: 1,
    packagesTitle: 'tomato',
    relatedProd: [
      require('../assests/images/p1.jpg'),
      require('../assests/images/p2.jpg'),
    ],
  },
  {
    id: 'p4',
    title: 'Coca-Cola zero sugar cola soda',
    categoryId: 'c2',
    categoryName: 'Beverages',
    thumbnail: require('../assests/images/p4.jpg'),
    price: 9.89,
    packages: 12,
    packagesTitle: 'fl oz',
    relatedProd: [
      require('../assests/images/p5.jpg'),
      require('../assests/images/p6.jpg'),
    ],
  },
  {
    id: 'p5',
    title: 'Simply Pulp Free Orange Juice',
    categoryId: 'c2',
    categoryName: 'Beverages',
    thumbnail: require('../assests/images/p5.jpg'),
    price: 5.49,
    packages: 52,
    packagesTitle: 'fl oz',
    relatedProd: [
      require('../assests/images/p4.jpg'),
      require('../assests/images/p6.jpg'),
    ],
  },
  {
    id: 'p6',
    title: 'Signature Select Refreshed Purified Drinki...',
    categoryId: 'c2',
    categoryName: 'Beverages',
    thumbnail: require('../assests/images/p6.jpg'),
    price: 4.39,
    packages: 24,
    packagesTitle: 'fl oz',
    relatedProd: [
      require('../assests/images/p4.jpg'),
      require('../assests/images/p5.jpg'),
    ],
  },
  {
    id: 'p7',
    title: 'T.G.I. Friday’s Boneless Chicken Bites',
    categoryId: 'c3',
    categoryName: 'Frozen',
    thumbnail: require('../assests/images/p7.jpg'),
    price: 10.44,
    packages: 15,
    packagesTitle: 'oz',
    relatedProd: [
      require('../assests/images/p8.jpg'),
      require('../assests/images/p9.jpg'),
    ],
  },
  {
    id: 'p8',
    title: 'Apple and Maple Froken Sausages',
    categoryId: 'c3',
    categoryName: 'Frozen',

    thumbnail: require('../assests/images/p8.jpg'),
    price: 7.69,
    packages: 55,
    packagesTitle: 'fl oz',
    relatedProd: [
      require('../assests/images/p7.jpg'),
      require('../assests/images/p9.jpg'),
    ],
  },
  {
    id: 'p9',
    title: 'Top Ramen Frozen Chicken',
    categoryId: 'c3',
    categoryName: 'Frozen',

    thumbnail: require('../assests/images/p9.jpg'),
    price: 8.49,
    packages: 52,
    packagesTitle: 'fl oz',
    relatedProd: [
      require('../assests/images/p7.jpg'),
      require('../assests/images/p8.jpg'),
    ],
  },
  {
    id: 'p10',
    title: 'yogi honey chai turmeric...',
    categoryId: 'c4',
    categoryName: 'Pantry',
    thumbnail: require('../assests/images/p10.jpg'),
    price: 5.49,
    packages: 16,
    packagesTitle: 'tea bags',
    relatedProd: [
      require('../assests/images/p11.jpg'),
      require('../assests/images/p12.jpg'),
    ],
  },
  {
    id: 'p11',
    title: 'pillsbury sugarfree chocolate...',
    categoryId: 'c4',
    categoryName: 'Pantry',
    thumbnail: require('../assests/images/p11.jpg'),
    price: 5.49,
    packages: 12.4,
    packagesTitle: 'oz',
    relatedProd: [
      require('../assests/images/p10.jpg'),
      require('../assests/images/p12.jpg'),
    ],
  },
  {
    id: 'p12',
    title: 'pillsbury family milk...',
    categoryId: 'c4',
    categoryName: 'Pantry',
    thumbnail: require('../assests/images/p12.jpg'),
    price: 2.74,
    packages: 18.4,
    packagesTitle: 'oz',
    relatedProd: [
      require('../assests/images/p10.jpg'),
      require('../assests/images/p11.jpg'),
    ],
  },
  {
    id: 'p13',
    title: 'doritos nacho cheese',
    categoryId: 'c5',
    categoryName: 'Groceries',
    thumbnail: require('../assests/images/p13.jpg'),
    price: 6.15,
    packages: 9.3,
    packagesTitle: 'oz',
    relatedProd: [
      require('../assests/images/p14.jpg'),
      require('../assests/images/p15.jpg'),
    ],
  },
  {
    id: 'p14',
    title: 'wheat thins sundried tomato &...',
    categoryId: 'c5',
    categoryName: 'Groceries',
    thumbnail: require('../assests/images/p14.jpg'),
    price: 5.49,
    packages: 8.5,
    packagesTitle: 'oz',
    relatedProd: [
      require('../assests/images/p13.jpg'),
      require('../assests/images/p15.jpg'),
    ],
  },
  {
    id: 'p15',
    title: 'Doritos Cool Ranch Big Bag',
    categoryId: 'c5',
    categoryName: 'Groceries',
    thumbnail: require('../assests/images/p15.jpg'),
    price: 6.15,
    packages: 9.2,
    packagesTitle: 'oz',
    relatedProd: [
      require('../assests/images/p13.jpg'),
      require('../assests/images/p14.jpg'),
    ],
  },
  {
    id: 'p16',
    title: 'Signature Farms Boneless Skinless Chicke...',
    categoryId: 'c6',
    categoryName: 'Meat',
    thumbnail: require('../assests/images/p16.jpg'),
    price: 11.54,
    packages: 1.5,
    packagesTitle: 'lbs',
    relatedProd: [
      require('../assests/images/p17.jpg'),
      require('../assests/images/p18.jpg'),
    ],
  },
  {
    id: 'p17',
    title: 'Boar’s Head Turkey Honey Maple Glazed',
    categoryId: 'c6',
    categoryName: 'Meat',
    thumbnail: require('../assests/images/p17.jpg'),
    price: 7.69,
    packages: 12,
    packagesTitle: 'oz',
    relatedProd: [
      require('../assests/images/p16.jpg'),
      require('../assests/images/p18.jpg'),
    ],
  },
  {
    id: 'p18',
    title: 'Jennie-O 93% Lean Ground...',
    categoryId: 'c6',
    categoryName: 'Meat',
    thumbnail: require('../assests/images/p18.jpg'),
    price: 7.14,
    packages: 16,
    packagesTitle: 'oz',
    relatedProd: [
      require('../assests/images/p16.jpg'),
      require('../assests/images/p17.jpg'),
    ],
  },
  {
    id: 'p19',
    title: 'Open Nature Vegan non- Dairy',
    categoryId: 'c7',
    categoryName: 'Cheese',
    thumbnail: require('../assests/images/p19.jpg'),
    price: 5.49,
    packages: 8,
    packagesTitle: 'oz',
    relatedProd: [
      require('../assests/images/p20.jpg'),
      require('../assests/images/p21.jpg'),
    ],
  },
  {
    id: 'p20',
    title: 'Primo Taglio Herb & Garlic Brie Cheese',
    categoryId: 'c7',
    categoryName: 'Cheese',
    thumbnail: require('../assests/images/p20.jpg'),
    price: 7.7,
    packages: 0.5,
    packagesTitle: 'lb',
    relatedProd: [
      require('../assests/images/p19.jpg'),
      require('../assests/images/p21.jpg'),
    ],
  },
  {
    id: 'p21',
    title: 'Tillamook Sharp White Cheddar',
    categoryId: 'c7',
    categoryName: 'Cheese',
    thumbnail: require('../assests/images/p21.jpg'),
    price: 5.49,
    packages: 8,
    packagesTitle: 'oz',
    relatedProd: [
      require('../assests/images/p19.jpg'),
      require('../assests/images/p20.jpg'),
    ],
  },
];

export const sections = [
  {
    title: 'Fruits & Vegetables',
    data: [products[0], products[1], products[2]],
  },
  {
    title: 'Beverages',
    data: [products[3], products[4], products[5]],
  },
  {
    title: 'Frozen',
    data: [products[6], products[7], products[8]],
  },
  {
    title: 'Pantry',
    data: [products[9], products[10], products[11]],
  },
  {
    title: 'Groceries',
    data: [products[12], products[13], products[14]],
  },
  {
    title: 'Meat',
    data: [products[15], products[16], products[17]],
  },
  {
    title: 'Cheese',
    data: [products[18], products[19], products[20]],
  },
];
export const OfferImgJSON = [
  {
    imgLink: require('../assests/images/banner1.jpg'),
  },
  {
    imgLink: require('../assests/images/banner2.jpg'),
  },
];
