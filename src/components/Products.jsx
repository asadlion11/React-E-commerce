import Product from './Product';
const products = [
    {
        id: 1,
        name: 'MacBook Pro',
        urlImage: 'https://images.unsplash.com/photo-1576103200868-2dd3eec3f333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
        price: 400      
    },
    {
        id: 2,
        name: 'HP Laptop',
        urlImage: 'https://images.unsplash.com/photo-1604684768394-52a862c2955a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        price: 350      
    },
    {
        id: 3,
        name: 'Gaming Keyboard',
        urlImage: 'https://images.unsplash.com/photo-1614285457768-646f65ca8548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        price: 15    
    },
    {
        id: 4,
        name: 'Iphone 14 Pro Max',
        urlImage: 'https://images.unsplash.com/photo-1670825988535-399aaf1c9113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        price: 1200     
    },
    {
        id: 5,
        name: 'Samsung S22 Ultra',
        urlImage: 'https://images.unsplash.com/photo-1675285776817-632fb95aff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=433&q=80',
        price: 1200 
    },
    {
        id: 6,
        name: 'Gaming Mouse',
        urlImage: 'https://images.unsplash.com/photo-1588440573874-54185a266452?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 5    
    },
    {
        id: 7,
        name: 'Airpods',
        urlImage: 'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
        price: 4    
    },
    {
        id: 8,
        name: 'Nike Shoes',
        urlImage: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: 10   
    },
    {
        id: 9,
        name: 'Asus Laptop',
        urlImage: 'https://images.unsplash.com/photo-1508965493703-4823ac484045?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 300    
    },
    {
        id: 10,
        name: 'Samsung A73 5G',
        urlImage: 'https://burleylab.org/wp-content/uploads/2022/10/Samsung-Galaxy-A73-5G.jpg',
        price: 400    
    },
    {
        id: 11,
        name: 'Monitor',
        urlImage: 'https://images.pexels.com/photos/2049411/pexels-photo-2049411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: 200    
    },
    {
        id: 12,
        name: 'Gaming Chair',
        urlImage: 'https://tse2.mm.bing.net/th?id=OIP.K5R9zAyPDTj53TxxF8FJ-QHaHa&pid=Api&P=0',
        price: 180    
    }
];
const Products = () => {
    return (
        <div className="grid">
            {
                products.map(product => (
                    <Product key = {product.id}product = {product}/>
                ))
            }
        </div>
    );;
}
export default Products;