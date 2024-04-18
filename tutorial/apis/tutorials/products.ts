import { Product } from "./types.ts";
export const products: { breakfast: Product[]; lunch: Product[] } = {
  breakfast: [
    {
      name: "Milk",
      price: 2.99,
      description: "Fresh milk from the farm",
      image:
        "https://cdn.britannica.com/77/200377-050-4326767F/milk-splashing-glass.jpg",
      id: 1,
    },
    {
      name: "Bread",
      price: 1.99,
      description: "Freshly baked bread",
      image:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0375FC32-2896-40AF-9ACD-6E904EC7116E/Derivates/4EB8635B-A00A-4E88-9A28-E3C9BB6BEC90.jpg",
      id: 2,
    },
    {
      name: "Cheese",
      price: 4.99,
      description: "Imported cheese from France",
      image:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg",
      id: 3,
    },
    {
      name: "Butter",
      price: 3.99,
      description: "Fresh butter from the farm",
      image:
        "https://media.post.rvohealth.io/wp-content/uploads/2020/08/AN451-Butter-732x549-thumb-732x549.jpg",
      id: 4,
    },
    {
      name: "Eggs",
      price: 2.99,
      description: "Fresh eggs from the farm",
      image:
        "https://media.post.rvohealth.io/wp-content/uploads/2020/09/health-benefits-of-eggs-732x549-thumbnail-732x549.jpg",
      id: 5,
    },
  ],
  lunch: [
    {
      name: "Pizza",
      price: 12.99,
      description: "Delicious pizza with pepperoni",
      image:
        "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg",
      id: 6,
    },
    {
      name: "Burger",
      price: 8.99,
      description: "Juicy burger with cheese and bacon",
      image:
        "https://cdn2.cocinadelirante.com/sites/default/files/images/2023/08/como-hacer-hamburguesa-de-atun.jpg",
      id: 7,
    },
    {
      name: "Pasta",
      price: 10.99,
      description: "Spaghetti with tomato sauce",
      image:
        "https://www.pequerecetas.com/wp-content/uploads/2024/01/espaguetis-amatriciana-receta.jpg",
      id: 8,
    },
    {
      name: "Salad",
      price: 6.99,
      description: "Fresh salad with lettuce and tomatoes",
      image:
        "https://www.thespruceeats.com/thmb/2GoDt7juuaU7lxtQDq-_IjEr6t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-our-favorite-simple-green-salad-recipe-7370448-hero-01-4ca9788a0a3c4d53b70f1d07f8382b7f.jpg",
      id: 9,
    },
    {
      name: "Sandwich",
      price: 5.99,
      description: "Classic sandwich with ham and cheese",
      image: "https://saborgourmet.com/wp-content/uploads/2018/07/4.jpg",
      id: 10,
    },
    {
      name: "Soup",
      price: 4.99,
      description: "Hot soup with vegetables",
      image:
        "https://www.allrecipes.com/thmb/pTGS0SZsSQK85sV_RQE_K6ZfoN4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/26460-quick-and-easy-chicken-noodle-soup-allrecipes-1x1-1-b88125437574471db3e114c40bc6928e.jpg",
      id: 11,
    },
    {
      name: "Sushi",
      price: 14.99,
      description: "Fresh sushi with salmon and avocado",
      image:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/0749D9BC-260D-40F4-A07F-54814C4A82B4/Derivates/A73A7793-F3EE-4B90-ABA4-1CC1A0C3E18F.jpg",
      id: 12,
    },
  ],
};
