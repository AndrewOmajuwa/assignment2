//creating and exporting the class ShoppingCart

module.exports = class ShoppingCart {
    constructor(ShoppingCart){
        this.ShoppingCart = ShoppingCart
        this.items = []
    }
    //creating get item function

    getItems(){
        return this.items

    }

    //creating additem function

    addItem(name, quantity, pricePerUnit){
        return this.items.push({ name,
                                 quantity, 
                                 pricePerUnit
        })
    }

    //creating the clear function

    clear(){
        return this.items = []
    }

    //creating the total cost function

    total(){
        this.items
        .map(currentItem => 
        currentItem.pricePerUnit *= currentItem.quantity)
        .reduce((totalValue, currentItemV) => 
        totalValue + 
        currentItemV)
    }

}
