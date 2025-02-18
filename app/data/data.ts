import {Event, Filter, Product} from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Salmon Tartare',
    description:
      'Tender salmon tartare with avocado and capers, served on toast.',
    price: 35,
    category: 'Hot Dishes',
    image:
      'https://otvet.imgsmail.ru/download/86598577_043111ec8e5fb000af1d13cdd9143178_800.gif',
  },
  {
    id: 2,
    name: 'Bruschetta with Tomatoes and Basil',
    description:
      'Crispy bruschetta with juicy tomatoes, garlic, and olive oil.',
    price: 65,
    category: 'Hot Dishes',
    image:
      'https://i.pinimg.com/736x/0c/97/e0/0c97e0d5c8964fcf0b1fc92436e88bf1.jpg',
  },
  {
    id: 3,
    name: 'Hummus with Olive Oil',
    description: 'Creamy chickpea hummus with tahini, garlic, and olive oil.',
    price: 35,
    category: 'Hot Dishes',
    image:
      'https://avatars.mds.yandex.net/i?id=262cd4d79d5d8565b6bc130eafe6031e_l-10639540-images-thumbs&n=13',
  },
  {
    id: 4,
    name: 'Greek Salad',
    description:
      'Fresh salad with tomatoes, cucumbers, feta cheese, olives, and red onion.',
    price: 40,
    category: 'Hot Dishes',
    image:
      'https://avatars.mds.yandex.net/i?id=c47e50c33ec2747e96db6f232e81052b_l-5232646-images-thumbs&n=13',
  },
  {
    id: 5,
    name: 'Andalusian Gazpacho',
    description: 'Chilled tomato soup with cucumbers, peppers, and garlic.',
    price: 55,
    category: 'Hot Dishes',
    image:
      'https://avatars.mds.yandex.net/i?id=460018c69e8a69af2e8e665f291eb504_l-5250377-images-thumbs&n=13',
  },
  {
    id: 6,
    name: 'Duck Confit with Berry Sauce',
    description: 'Tender duck confit served with a berry sauce and potatoes.',
    price: 75,
    category: 'Hot Dishes',
    image:
      'https://avatars.mds.yandex.net/get-sprav-products/1540730/2a0000016e40ae39a65293d39a453c5756fc/M_height',
  },
  {
    id: 7,
    name: 'Beef Stroganoff with Mushrooms',
    description: 'Classic beef dish with mushrooms in a creamy sauce.',
    price: 95,
    category: 'Hot Dishes',
    image:
      'https://avatars.mds.yandex.net/i?id=3865a3a112bb15ce7d660aa04e3ba4bd_l-5161363-images-thumbs&n=13',
  },
  {
    id: 8,
    name: 'Provencal Ratatouille',
    description:
      'Vegetable stew with eggplants, zucchini, tomatoes, and Provencal herbs.',
    price: 55,
    category: 'Hot Dishes',
    image:
      'https://avatars.mds.yandex.net/i?id=12a4bed6640039598413de5ec93adfcf_l-5647646-images-thumbs&n=13',
  },
  {
    id: 9,
    name: 'Lasagna Bolognese',
    description:
      'Layers of pasta with Bolognese sauce, bechamel, and Parmesan cheese.',
    price: 40,
    category: 'Hot Dishes',
    image:
      'https://avatars.mds.yandex.net/i?id=de80fa29b8207d2ac516281e2c2e4123_l-10878377-images-thumbs&n=13',
  },
  {
    id: 10,
    name: 'Viennese Schnitzel',
    description: 'Crispy pork cutlet served with potato salad and lemon.',
    price: 25,
    category: 'Hot Dishes',
    image:
      'https://avatars.mds.yandex.net/i?id=498aabb9f560be06bec8ddd04d282fda_l-9164755-images-thumbs&n=13',
  },

  {
    id: 11,
    name: 'Classic Tiramisu',
    description:
      'Layered dessert with mascarpone cream, soaked in coffee and dusted with cocoa.',
    price: 25,
    category: 'Desserts',
    image:
      'https://avatars.mds.yandex.net/i?id=0d0de6139f0f828d6d4429c05fd8f821440c80f3-8210081-images-thumbs&n=13',
  },
  {
    id: 12,
    name: 'Crème Brûlée',
    description:
      'French dessert with a creamy custard and caramelized sugar crust.',
    price: 60,
    category: 'Desserts',
    image:
      'https://avatars.mds.yandex.net/i?id=6c098431bf68bfd66900ac0f9daef9ce_l-9598980-images-thumbs&n=13',
  },
  {
    id: 13,
    name: 'Panna Cotta with Berry Coulis',
    description:
      'Italian cream dessert with vanilla, served with a fresh berry sauce.',
    price: 45,
    category: 'Desserts',
    image:
      'https://resizer.mail.ru/p/075a5525-1337-5fd0-86f7-c6c2be8765a5/AQAF4Qo-H_EY7yAsQkLPuB3EC1StAk0VM1cER74ivTUnwi8g6TBuBh6FzZt2W3RCgJuvWPzLy3wonAHZ0ktp3PwZfN8.jpg',
  },
  {
    id: 14,
    name: 'Chocolate Cream Eclairs',
    description: 'Light éclairs filled with rich chocolate cream and glaze.',
    price: 15,
    category: 'Desserts',
    image:
      'https://sun9-59.userapi.com/s/v1/ig2/VgKl3yVmmu-gKwLcuPZTpWi909oU8vujA0BNn6oZa_HHsa9ZqK1us7u-HBjC4gxOvgwTBRQxq9n1gYt7JXDE2mau.jpg?quality=96&as=32x21,48x32,72x48,108x72,160x107,240x161,360x241,480x322,540x362,640x429,720x483,771x517&from=bu&u=Gyucl8mucbDek5PzdWqowItsgWmCY6l7Tb8TJU7cJeQ&cs=604x405',
  },
  {
    id: 15,
    name: 'Apple Strudel with Vanilla Sauce',
    description: 'Apple and cinnamon dessert served with vanilla sauce.',
    price: 30,
    category: 'Desserts',
    image:
      'https://avatars.mds.yandex.net/i?id=a401f451c91d5706787748f28296d63821d0749f-4495446-images-thumbs&n=13',
  },

  {
    id: 16,
    name: 'French Champagne',
    description: 'Elegant and sparkling, perfect for celebratory moments.',
    price: 55,
    category: 'Drinks',
    image:
      'https://avatars.mds.yandex.net/i?id=03a07bdb4adcf255edd04b7a2a37c207_l-4571652-images-thumbs&n=13',
  },
  {
    id: 17,
    name: 'Italian Cappuccino',
    description: 'Classic cappuccino with a rich coffee flavor and milk foam.',
    price: 15,
    category: 'Drinks',
    image:
      'https://i.pinimg.com/originals/17/c3/89/17c389f3aaf52074834b54784b0be480.jpg',
  },
  {
    id: 18,
    name: 'German Wheat Beer',
    description: 'Light beer with fruity notes and a refreshing taste.',
    price: 50,
    category: 'Drinks',
    image:
      'https://avatars.mds.yandex.net/i?id=855e1a2ae4a0d219c66ac3c4e40f319d_l-5234328-images-thumbs&n=13',
  },
  {
    id: 19,
    name: 'Spanish Sangria',
    description: 'A fruity cocktail based on red wine with oranges and fruit.',
    price: 45,
    category: 'Drinks',
    image:
      'https://s2.wine.style/images_raw/pages/d01t3-1wkaay6mj1593231882.jpg',
  },
  {
    id: 20,
    name: 'British Classic Tea',
    description: 'Black tea served with milk or lemon, accompanied by sugar.',
    price: 10,
    category: 'Drinks',
    image:
      'https://otvet.imgsmail.ru/download/u_712be23325d3406a315777c9dde685e5.jpg',
  },
];

export const filterData: Filter[] = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Hot Dishes',
  },
  {
    id: 3,
    name: 'Desserts',
  },
  {
    id: 4,
    name: 'Drinks',
  },
];

export const eventData: Event[] = [
  {
    id: 0,
    title: 'Live music',
    date: 'Every sunday, 18:00 - 23:00',
    time: 'Time: 7:00 PM - 10:00 PM',
    detail:
      'In the live sound of music you can relax from the everyday hustle and bustle while enjoying a delicious meal. The atmosphere of white tablecloths and soft light will create perfect conditions for a romantic.',
  },
  {
    id: 1,
    title: 'Cooking with the chef',
    date: 'Every Saturday, 15:00 - 19:00',
    time: 'Time: 6:30 PM - 9:00 PM',
    detail:
      'We invite you to a unique culinary event “Cooking with the Chef”, where you can not only learn how to cook, but also learn the secrets of professional cooking skills from our chef. ',
  },
  {
    id: 2,
    title: 'Preparing for Christmas',
    date: '31.12.24, 10:00 - 00:00',
    time: 'Time: 7:00 PM - 10:00 PM',
    detail:
      'We invite you to a warm and magical “Preparing for Christmas” event that will immerse you in the Christmas spirit and inspire you to create a festive mood. This event is perfect for a family vacation, a get-together with friends or just for those who want to get into the Christmas spirit.',
  },
];
