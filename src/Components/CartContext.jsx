import { createContext, useContext, useReducer } from "react";
export const moamen=createContext();










const saved=localStorage.getItem('savedcart')
 const intialstate={
  cart:saved?JSON.parse(saved):[]
 }
    const reducer=(state,action)=>{
        switch(action.type){
            case 'addtocart':
              const index=state.cart.findIndex(item=>item.title===action.payload.title)
              if(index!==-1){
                const arry=[...state.cart]
                arry[index].qty+=1
                return{
                  ...state,cart:arry
                }
              }else{
                return{
                  ...state,cart:[...state.cart,{...action.payload,qty:1}]
                }
              }
              case '+':
                const indexs=state.cart.findIndex(item=>item.title===action.payload.title)
               const arrys=[...state.cart]
               arrys[indexs].qty+=1
               return{
                ...state,cart:arrys
               }
               case '-':
                 const i=state.cart.findIndex(item=>item.title===action.payload.title)
               const arry=[...state.cart]
               if(arry[i].qty>1){
                arry[i].qty-=1
                return{
                ...state,cart:arry
               }
               }else{
                return{
            ...state,cart:state.cart.filter(item=>item.title!==action.payload.title)
            }
               }
               
               
            case'empity':
            return{
            ...state,cart:[]
            }
           
        default :
           return state
        }
    };
     export const Makzan=({children})=>{
    const[state,dispatch]=useReducer(reducer,intialstate)
  return (
    <div>
      <moamen.Provider value={{state,dispatch}}>
        {children}
      </moamen.Provider>
    </div>
  )
}
export const usecart=()=>useContext(moamen)

