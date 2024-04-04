export type Guitar = {
    id : number;
    name: string,
    image : string;
    description: string;
    price: number
}
export type CarItem = Guitar  & {
    quantity:number
}

// Pick es para seleccionar los atributos que necesitas 
// export type CarItem = Pick<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }
// Omit quita lo seleccionado y agrega lo nuevo
// export type CarItems = Omit<Guitar, 'id' | 'name' | 'price' > & {
//     quantity: number
// }

// export interface CarItem extends Guitar   {
//     quantity:number
// }


// interface Guitar {
//     id : number;
//     name: string,
//     image : string;
//     description: string;
//     price: number
// }

// type GuitarProps = {
//     guitar : Guitar,
//     addToCart : (item: Guitar)=> void
// }

