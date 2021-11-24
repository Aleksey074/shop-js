const goods = [
    { title: 'Shirt', price: 150, photo: src = "img/Shirt.jpg" },
    { title: 'Socks', price: 50, photo: src = "img/Socks.jpg" },
    { title: 'Jacket', price: 350, photo: src = "img/Jacket.webp" },
    { title: 'Shoes', price: 250, photo: src = "img/Shoes.jpg" },
];


const renderGoodsItem = ({ title, price, photo }) => (
    `<div class= "goods-item">
        <h3 class= "item-name">${title}</h3>
        <img class= "item-photo" src="${photo}" alt="">
        <p class= "item-price">${price}$</p>
        <button class="card-button">Добавить в корзину</button>
    </div>`
)



const renderGoodsList = () => {
    let goodsList = goods.map((item) => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);




