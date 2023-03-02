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
        name: 'PS5',
        urlImage: 'https://images.unsplash.com/photo-1588440573874-54185a266452?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 5    
    }
];
const Products = () => {
    return (
        <div className="grid">
            {
                products.map(product => (
                    <Product product = {product}/>
                ))
            }
        </div>
    );;
}
export default Products;