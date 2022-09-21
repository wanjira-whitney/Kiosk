import React,{useState,useEffect} from 'react'

const Products=()=>{
    const [products,setproducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [fruits,setfruits] = useState([]);

    const [vegetables,setvegetables] = useState([]);
    
    useEffect(()=>{
        allProducts()
        allFruits()
        allVegetables()
    }, [])

    const allProducts=()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(result => {
            setLoading(true);
            setproducts(result);
        })
        .catch(e=>{throw new Error(e.message)})
    }


    const allFruits=()=>{
        fetch('http://localhost:5000/products/fruits')
        .then(res => res.json())
        .then(result => {
            setLoading(true);
            setfruits(result);
        })
        .catch(e=>{throw new Error(e.message)})
    }


    const allVegetables=()=>{
        fetch('http://localhost:5000/products/vegetables')
        .then(res => res.json())
        .then(result => {
            setLoading(true);
            setvegetables(result);
        })
        .catch(e=>{throw new Error(e.message)})
    }

   if(!loading){
        return <div>Loading ...</div>;
    }
    return (
        <div className="products">


            <ul >
            {products.map(item =>(
               <li key={item.id}>{item.name}</li> 
            ))}
            </ul>

            <ul >
            {fruits.map(item =>(
               <li key={item.id}>{item.name}</li> 
            ))}
            </ul>

            <ul >
            {vegetables.map(item =>(
               <li key={item.id}>{item.name}</li> 
            ))}
            </ul>
        </div>
    )
}

export default Products