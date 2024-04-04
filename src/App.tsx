import { useState } from "react"
import { Header } from "./components/Header"
import { Guitar } from "./components/Guitar"
import { useCart } from "./hooks/useCart"
function App() {
    const {data, cart, addToCart, clearCart, decreaseFromCart, 
        increaseQuantity, removeFromCart, isEmpty, carTotal} = useCart()
        
    const  [auth, setAuth] = useState(false)
 


    return (

        <>
            <Header
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseFromCart={decreaseFromCart}
                clearCart={clearCart}
                isEmpty={isEmpty}
                carTotal={carTotal}
            />
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((guitar) => {
                        return (
                            <Guitar
                                key={guitar.id}
                                guitar={guitar}
                                addToCart={addToCart}
                            />
                        )
                    })}

                </div>
            </main>
            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    )
}

export { App }
