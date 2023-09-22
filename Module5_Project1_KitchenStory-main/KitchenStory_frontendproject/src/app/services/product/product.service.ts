import { Injectable } from '@angular/core';
import Product from 'src/app/models/product';
import { Tag } from 'src/app/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Properties
  private products: Array<Product> = [];
  private productCount: number;

  //Constructor
  constructor() {
    this.products = this.setAllProducts();
    this.productCount = this.products.length;
  }

  //Methods
  addProduct(product: Product) {
    this.products.push(product);
    this.productCount = this.products.length;
  }

  removeProductById(productId: number) {
    this.products = this.products.filter(item => item.productId !== productId);
    this.productCount = this.products.length;
  }
  /* *******************************************
   * Method Name: getProductById()
   * Access Type: public
   * Input Parameters: Product ID number
   * Return Type: Product object
   * Purpose: Will search the Products array and extract the target Product by Product ID
   *          Usually this would come from the database and backend, but for this version, let's filter the data here
   * ******************************************* */
  getProductById(id: number): Product {
    return this.getAllProducts().find(product => product.productId == id)!;
  }

  /* *******************************************
   * Method Name: getAllProductsBySearchTerm()
   * Access Type: public
   * Input Parameters: String for the search term
   * Return Type: Product[] array
   * Purpose: Find all products that satisfy the search term
   * ******************************************* */
  getAllProductsBySearchTerm(searchTerm: string): Product[] {
    return this.getAllProducts().filter(product =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  /* *******************************************
   * Method Name: getAllTags()
   * Access Type: public
   * Input Parameters: none
   * Return Type: Tag[] array
   * Purpose: Retrieving all the tag names and associated counts.
   *         Ideally this information would come from the database. For this version, let's hard code the data
   * ******************************************* */
  getAllTags(): Tag[] {

    return [
      { name: "All", count: this.productCount },
      { name: "Salads", count: 3 },
      { name: "Breakfast", count: 2 },
      { name: "Vegetables", count: 7 },
      { name: "Beverages", count: 3 },


    ];
  }

  /* *******************************************
   * Method Name: getAllProductsByTag()
   * Access Type: public
   * Input Parameters: String with the target tag
   * Return Type: Product[] array
   * Purpose: Return allof the Products that have the desired tag
   * ******************************************* */
  getAllProductsByTag(tag: string): Product[] {

    //let's use the ternary operator :-)
    return (tag == "All") ?
      this.getAllProducts() :
      this.getAllProducts().filter(product => product.tags?.includes(tag));
  }

  /* *******************************************
   * Method Name: getAllProducts()
   * Access Type: public
   * Input Parameters: none
   * Return Type: Product[] array
   * Purpose: Returns a hard-coded array of Product Objects
   *          Once the backend functionality is in place, the products will be stored in the database
   * ******************************************* */
  getAllProducts(): Product[] {
    return this.products;
  }

  getAllProductsCount(): number {
    return this.products.length;
  }

  /* *******************************************
   * Method Name: setAllProducts()
   * Access Type: public
   * Input Parameters: none
   * Return Type: Product[] array
   * Purpose: Returns a hard-coded array of Product Objects
   *          Once the backend functionality is in place, the products will be stored in the database
   * ******************************************* */
  setAllProducts(): Product[] {
    return [
      {
        productId: 1,
        imageUrl: '/assets/images/7 Up.JPG',
        productName: '7 Up',
        price: 98,
        brand: 'Coca Cola',
        rating: 4,
        numOfReviews: 9,
        description: 'A lemon-lime flavored carbonated soft drink.',
        organic: true,
        tags: [ 'Beverages' ]
      },
      {
        productId: 2,
        imageUrl: '/assets/images/Sprite.JPG',
        productName: 'Sprite',
        price: 87,
        brand: 'Coca Cola',
        rating: 3,
        numOfReviews: 17,
        description: 'A lemon-lime flavored carbonated soft drink',
        organic: true,
        tags: [ 'Beverages' ]
      },
      {
        productId: 3,
        imageUrl: '/assets/images/Appy Fizz.JPG',
        productName: 'Appy Fizz',
        price: 49,
        brand: 'Coca Cola',
        rating: 5,
        numOfReviews: 7,
        description: 'Carbonated apple-flavored beverage.',
        organic: true,
        tags: [ 'Beverages' ]
      },
      {
        productId: 4,
        imageUrl: '/assets/images/Milk.JPG',
        productName: 'Milk (1 litre)',
        price: 56,
        brand: 'Amul',
        rating: 4,
        numOfReviews: 70,
        description: 'A nutritious dairy product rich in calcium, commonly consumed in various forms.',
        organic: true,
        tags: [ 'Breakfast' ]
      },
      {
        productId: 5,
        imageUrl: '/assets/images/Bread.JPG',
        productName: 'Bread',
        price: 87,
        brand: 'Brittania',
        rating: 4,
        numOfReviews: 715,
        description: 'A staple food made from wheat, often used for sandwiches, toast, and more.',
        organic: true,
        tags: [ 'Breakfast' ]
      },
      {
        productId: 6,
        imageUrl: '/assets/images/Capsicum.JPG',
        productName: 'Capsicum(1 kg)',
        price: 53.5,
        brand: 'FreshO',
        rating: 4,
        numOfReviews: 71,
        description: 'A colorful bell-shaped vegetable commonly used in salads and cooking. ',
        organic: true,
        tags: [ 'Vegetables' ]
      },
      {
        productId: 7,
        imageUrl: '/assets/images/Potato.JPG',
        productName: 'Potato (2kg)',
        price: 55,
        brand: 'FreshO',
        rating: 5,
        numOfReviews: 131,
        description: 'A starchy tuber often fried, mashed, or used in various culinary dishes. ',
        organic: true,
        tags: [ 'Vegetables' ]
      },
      {
        productId: 8,
        imageUrl: '/assets/images/Tomato.JPG',
        productName: 'Tomato (1kg)',
        price: 25,
        brand: 'FreshO',
        rating: 4,
        numOfReviews: 11,
        description: 'A versatile red fruit used in salads, sauces, and a wide range of dishes. ',
        organic: true,
        tags: [ 'Vegetables' ]
      },
      {
        productId: 9,
        imageUrl: '/assets/images/Coriander.JPG',
        productName: 'Coriander Leaves (250 g)',
        price: 16,
        brand: 'FreshO',
        rating: 5,
        numOfReviews: 110,
        description: 'Fragrant herbs commonly used for garnishing and flavoring in cooking. ',
        organic: true,
        tags: [ 'Vegetables' ]
      },
      {
        productId: 10,
        imageUrl: '/assets/images/Cauliflower.JPG',
        productName: 'Cauliflower (1 kg)',
        price: 41,
        brand: 'FreshO',
        rating: 3,
        numOfReviews: 113,
        description: 'A white, cruciferous vegetable that can be steamed, roasted, or mashed. ',
        organic: true,
        tags: [ 'Vegetables' ]
      },
      {
        productId: 11,
        imageUrl: '/assets/images/Bottle gourd.JPG',
        productName: 'Bottle gourd (1 kg)',
        price: 20,
        brand: 'FreshO',
        rating: 4,
        numOfReviews: 104,
        description: 'A long, pale green vegetable used in various Indian and Asian cuisines. ',
        organic: true,
        tags: [ 'Vegetables' ]
      },
      {
        productId: 12,
        imageUrl: '/assets/images/Broccoli.JPG',
        productName: 'Broccoli (1 kg)',
        price: 54,
        brand: 'FreshO',
        rating: 5,
        numOfReviews: 11,
        description: 'A nutritious green vegetable with edible flowering heads, often steamed or stir-fried. ',
        organic: true,
        tags: [ 'Vegetables' ]
      },
      {
        productId: 13,
        imageUrl: '/assets/images/Orange carrots.JPG',
        productName: 'Orange Carrots (1kg)',
        price: 54,
        brand: 'FreshO',
        rating: 4,
        numOfReviews: 11,
        description: 'A sweet and nutritious root vegetable with a vibrant orange color. ',
        organic: true,
        tags: [ 'Salads' ]
      },
      {
        productId: 14,
        imageUrl: '/assets/images/Cucumber.JPG',
        productName: 'Cucumber (1kg)',
        price: 42,
        brand: 'FreshO',
        rating: 4,
        numOfReviews: 13,
        description: 'A crisp and refreshing green vegetable often enjoyed in salads and sandwiches. ',
        organic: true,
        tags: [ 'Salads' ]
      },
      {
        productId: 15,
        imageUrl: '/assets/images/Beetroot.JPG',
        productName: 'Beetroot (1kg)',
        price: 38,
        brand: 'FreshO',
        rating: 4,
        numOfReviews: 10,
        description: 'A deep-red root vegetable known for its earthy flavor and vibrant color. ',
        organic: true,
        tags: [ 'Salads' ]
      }
    ]
  }



}
