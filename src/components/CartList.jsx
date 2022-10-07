//Comp
import Item from "./Item";
//Btsp
import Button from 'react-bootstrap/Button';

function CartList({cart, clearCart, totalExpense}) {
  return (
    <>
        <br />
        <h2>Total a abonar: ${totalExpense}</h2>

        { cart.length>0 && 
        <Button variant="danger" className="mb-2" onClick={ () => clearCart() } >Vaciar carrito ☠</Button>
        }

        { 
        cart.map( product => 
        <Item 
        key={product.id} 
        id={product.id}
        product_name={product.product_name}
        price={product.price}
        organic={product.organic}
        stock={product.stock}
        desiredAmount={product.desiredAmount}/>)
        }
    </>
  )
}

export default CartList;