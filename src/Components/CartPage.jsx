import { usecart } from "./CartContext"


const CartPage = () => {
    const{state,dispatch}=usecart()
    const total=state.cart.reduce((acc,item)=>acc+item.price*item.qty,0);
  return (
    <div>
      <div className="p-2  bg-blue-500 rounded-lg  flex justify-between items-center">
  <h2 className="text-xl font-bold text-gray-800 ">إجمالي الحساب:</h2>
  <span className="text-2xl font-black text-green-800">${total}</span>
</div>
      <h1 className="text-2xl font-bold mb-4">سلة المشتريات</h1>
      {state.cart.length === 0 ? (
        <p>السلة فارغة حالياً</p>
      ) : (
        state.cart.map((item, index) => (
          <div key={index} className="flex justify-between border-b py-2">
             <span>{item.title}</span>
             <span className="font-bold">{item.price}$</span>
             <form className="max-w-xs mx-auto">
  <label
    
    className="block mb-1.5 text-sm font-medium text-heading"
  >
    Choose quantity:
  </label>
  <div className="relative flex items-center">
    <button
      type="button"
    
     onClick={(e) => {
    e.stopPropagation(); // بيمنع وصول الحدث لأي سكريبت خارجي
    dispatch({ type: '-', payload: item });
}}
      
      className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6"
    >
      <svg
        className="w-3 h-3 text-heading"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14"
        />
      </svg>
    </button>
    <input
      type="text"
      
    
      className="shrink-0 text-heading border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
      placeholder=""
      value={item.qty}
      required=""
    />
    <button
      type="button"
    
      onClick={(e) => {
    e.stopPropagation(); // بيمنع وصول الحدث لأي سكريبت خارجي
    dispatch({ type: '+', payload: item });
}}
      
      className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary rounded-full text-sm focus:outline-none h-6 w-6"
    >
      <svg
        className="w-3 h-3 text-heading"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14m-7 7V5"
        />
      </svg>
    </button>
  </div>
</form>
          </div>
        ))
      )}
      <button 
        onClick={() => dispatch({ type: 'empity' })}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        تفريغ السلة
      </button>
    </div>
  )
}

export default CartPage
