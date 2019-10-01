console.log("worked");

const hotdog = {
    id: 1,
    name: 'Хот-дог куриный',
    photoUrl: 'https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png?dw=230',
    des: 'Хот-дог с куриной колбаской с травами, сладким горчичным соусом, кетчупом, маринованными огурчиками, луком и халапеньо.',
    price:'79р.',
};

    const cheeseburger = {
        id: 2,
        name: 'Чизбургер Де Люкс',
        photoUrl: 'https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png?dw=230)"',
        des: 'Пряный горчичный соус, кетчуп, сочное филе в оригинальной панировке, лук, сыр Чеддер, огурцы на пшеничной булочке с кукурузной посыпкой, свежий салат и ломтики помидора.',
        price: '124р.'
    };

    const photo1El = document.getElementById('photo-1');
    photo1El.src = hotdog.photoUrl;

    const productName1El = document.getElementById('product-name-1');
    productName1El.textContent = hotdog.name;
 
    const price1El = document.getElementById('price1');
    price1El.textContent = hotdog.price;

    const des1El = document.getElementById('des1');
    des1El.textContent = hotdog.des;

    const photo2El = document.getElementById('photo-2');
    photo2El.src = cheeseburger.photoUrl;

    const productName2El = document.getElementById('product-name-2');
    productName2El.textContent = cheeseburger.name;

    const price2El = document.getElementById('price2');
    price2El.textContent = cheeseburger.price;

    const des2El = document.getElementById('des2');
    des2El.textContent = cheeseburger.des;
  