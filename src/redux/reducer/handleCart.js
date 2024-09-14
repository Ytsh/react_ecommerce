const carts = []

const handleCart = (state=carts, action) => {
    const product = action.payload
    switch(action.type){
        case "ADDITEM":
            const exist = state.find((cart)=> cart.id === product.id)
            if(exist){
                return state.map((cart)=> cart.id === product.id ? {...cart, qty:cart.qty+1} : cart)
            }
            else{
                return [...state, {...product, qty:1}]
            }
            break;
        case "DELETEITEM":
            const exist1 = state.find((x)=> x.id === product.id)
            if(exist1.qty === 1){
                return state.filter((x)=> x.id !== exist1.id)
            }else{
                return state.map((x)=> x.id === product.id?{...x,qty:x.qty-1}:x)
            }
            break;
        default:
            return state;
            break;
    }   
}
export default handleCart;