import axios from "axios"
import { useEffect } from "react"
import { usecart } from "./CartContext"


const ShowProducts = ({prods,setprods}) => {
  const {dispatch}=usecart()
  const fetched=async()=>{
     const res=  await axios.get('https://fakestoreapi.com/products')
    setprods(res.data)
  }
  useEffect(()=>{
    fetched()
  },[])
 
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100 h-full ">    
    {prods.map((items,index)=>{
      return  <div  key={index}class="flex flex-col  bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 ">
    <div class="px-4 py-2 flex-grow">
        <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white line-clamp-3">{items.title}</h1>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
    </div>

    <img class="object-contain w-full h-48 mt-2" src={items.image} alt="NIKE AIR"/>

    <div class="flex items-center   justify-between px-4 py-2 bg-gray-900">
        <h1 class="text-lg font-bold text-white">{items.price}</h1>
        <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
        onClick={()=>dispatch({type:'addtocart',payload:items})}>Add to cart</button>
    </div>
</div>
    })}
   </div>
  )
}

export default ShowProducts