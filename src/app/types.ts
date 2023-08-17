export interface IUser {
        id: number
        name: string
        age: number
        email: string
        permisson: boolean
}
export interface IProduct {
        id: number
        name: string
        stock: number
        price: number
}
export class Person {
        constructor(
                readonly id: number,
                public name : string,
                public age : number,
                public email : string
        ){}
}
export class Admin extends Person{
        constructor(
                id: number,
                name: string,
                age: number,
                email: string,
                readonly permisson: boolean
        ){
                super(id, name, age, email)
        }
}
export class User extends Person{
        constructor(
                id: number,
                name: string,
                age: number,
                email: string,
                public level: number
        ){
                super(id, name, age, email)
        }
}
export class Product{
        constructor (
                readonly id: number,
                public name: string,
                public stock: number,
                public price: number,

        ){}
}
export class ShoppingCart{
        constructor(
                public products: Product[],
                public totalPayment: number
        ){}
        
}
export class AddToCart{       
        addToCart(cart:ShoppingCart, item: Product, amount:number):void{
                cart.products.push(...Array(amount).fill(item))
        }
}
export class RemoveFromCart{
        removeFromCart(cart:ShoppingCart, item: Product){
                let itemIndex:number = cart.products.indexOf(item)
                cart.products.splice(itemIndex,1)
        }
}
export class TotalToPay{
        calcTotal(cart: ShoppingCart){
                cart.products.forEach(product =>{
                cart.totalPayment += product.price
                })
        }

}
export class Sell{
        constructor(
                readonly cart: ShoppingCart,
                public state: string

        ){}
}
export class ReStock{
        decreaseStock(sell: Sell){
                if(sell.state === 'exitoso'){
                        sell.cart.products.forEach((product)=>{
                                product.stock -= 1
                        })
                }
        }
}