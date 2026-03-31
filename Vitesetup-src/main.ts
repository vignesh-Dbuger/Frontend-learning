type Product = {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  stock: number;
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200, categoryId: 1, stock: 5 },
  { id: 2, name: "Mouse", price: 25, categoryId: 1, stock: 50 },
  { id: 3, name: "Desk", price: 200, categoryId: 2, stock: 10 },
  { id: 4, name: "Chair", price: 150, categoryId: 2, stock: 15 },
  { id: 5, name: "Notebook", price: 5, categoryId: 3, stock: 100 },
  { id: 6, name: "Pen", price: 2, categoryId: 3, stock: 200 },
];


interface total{
    tstock:number
    tprice:number
    count:number
}
const categorymap=new Map<number,total>();
products.forEach(item=>{
    const{categoryId,stock,price}=item;
    if(!categorymap.has(categoryId)){
        categorymap.set(categoryId,total.tstoc:0,total. tprice=0,total .
            count=0)
    }

})
