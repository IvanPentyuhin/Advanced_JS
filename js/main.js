class Cart{
    constructor(title, price, quantity){
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

}


class ProductList {
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this.fetchGoods();
        this.render();
        this.allPrice();
    }

    fetchGoods() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 20, img: './img/01.jpg' },
            { id: 2, title: 'Mouse', price: 100, img: './img/02.jpg' },
            { id: 3, title: 'Keyboard', price: 150, img: './img/03.jpg' },
            { id: 4, title: 'Gamepad', price: 50, img: './img/04.jpg' },
        ];
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
        }
    }

    allPrice(){
        let totalCost = 0;
        this.goods.map((item)=>{
           return totalCost = totalCost + item.price; 
        });
        return console.log(totalCost);
    }
}


class ProductItem{
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.img = product.img;
        this.id = product.id;
    }
    render() {
        return (`<div class="product-item">
                <img src='${this.img}' alt="">
                <h3>${this.title}</h3>
                <p>${this.price} $</p>
                <button class="buy-btn">Купить</button>
            </div>`
        )
    }
}


let list = new ProductList();