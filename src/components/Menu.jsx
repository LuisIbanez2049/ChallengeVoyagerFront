import React from 'react';
import FoodCards from './FoodCards';
import Button from "./Button";
import cheeseburguer from "../assets/menuImages/cheeseburguer.webp";
import american from "../assets/menuImages/american.webp";
import olkahoma from "../assets/menuImages/olkahoma.webp";
import vegana from "../assets/menuImages/vegana.webp";
import papas from "../assets/menuImages/papabacon.webp";
import coca from "../assets/menuImages/coca.png";
import drink from "../assets/soft-drink.png";  // Icon for drinks
import burger from "../assets/burger.png";     // Icon for hamburgers
import fries from "../assets/potato-fries.png"; // Icon for sides

const imageMap = {
  "Oklahoma": olkahoma,
  "American": american,
  "Voyager": cheeseburguer,
  "Cheeseburger": cheeseburguer,
  "Cheddar Bacon Fries": papas,
  "Veggie Burger": vegana,
  "Coca": coca
};

// Map for icons based on the category
const iconMap = {
  "burger": burger,
  "drink": drink,
  "side": fries
};

const Menu = () => {
  const products = [
    {
      name: "Oklahoma",
      description: "Juicy burger with caramelized onions and cheddar cheese.",
      price: 8.99,
      ingredients: ["beef", "cheddar cheese", "caramelized onions", "burger bun"],
      category: "burger"
    },
    {
      name: "American",
      description: "Classic American burger with lettuce, tomato, and mayonnaise.",
      price: 7.49,
      ingredients: ["beef", "lettuce", "tomato", "mayonnaise", "burger bun"],
      category: "burger"
    },
    {
      name: "Voyager",
      description: "Gourmet burger with avocado, bacon, and special sauce.",
      price: 9.99,
      ingredients: ["beef", "avocado", "bacon", "special sauce", "burger bun"],
      category: "burger"
    },
    {
      name: "Cheeseburger",
      description: "Delicious burger with double cheese and fresh onion.",
      price: 10.49,
      ingredients: ["beef", "double cheese", "fresh onion", "burger bun"],
      category: "burger"
    },
    {
      name: "Cheddar Bacon Fries",
      description: "Crispy French fries topped with melted cheddar cheese and crispy bacon.",
      price: 5.99,
      ingredients: ["French fries", "cheddar cheese", "bacon"],
      category: "side"
    },
    {
      name: "Veggie Burger",
      description: "Vegetarian burger with chickpeas and avocado sauce.",
      price: 8.99,
      ingredients: ["chickpeas", "avocado sauce", "lettuce", "whole wheat bun"],
      category: "burger"
    },
    {
      name: "Coca", 
      description: "Classic cola soda.",
      price: 1.99,
      ingredients: ["carbonated water", "sugar", "natural flavoring"],
      category: "drink"
    }
  ];

  let burgers = products.filter(product => product.category === "burger");
  let sides = products.filter(product => product.category === "side");
  let drinks = products.filter(product => product.category === "drink");

  return (
    <div className='flex flex-col gap-[20px] mx-[20px] justify-center items-center'>
      <h2 className='text-white font-bold text-[50px]'>Menu</h2>
      <div className='flex flex-col gap-[20px] items-center w-full'>
      <h3 className='text-white font-semibold text-[40px]'>Burgers</h3>
        <p className='text-white text-[25px] text-center'>All of our burgers come with a side of crispy fries to enhance your dining experience. Enjoy the perfect combination of flavors with every bite!</p>
        <div className='gaga flex flex-wrap gap-[20px] w-full justify-center'>
          {burgers.map((hamburguer) => (
            <FoodCards 
              key={hamburguer.name}
              name={hamburguer.name} 
              description={hamburguer.description} // Passing the description
              price={hamburguer.price} // Passing the price
              backgroundPosition="50% 100%"
              backgroundImage={imageMap[hamburguer.name]} 
              typeIcon={iconMap[hamburguer.category]} // Passing the category icon
            />
          ))}
        </div>
      </div>

      {/* Render Drinks */}
     

      <div className='flex flex-wrap justify-between w-full'>
        {sides.map((side) => (
          <FoodCards 
            key={side.name}
            name={side.name} 
            description={side.description} 
            price={side.price} 
            backgroundPosition="50% 100%"
            backgroundImage={imageMap[side.name]} 
            typeIcon={iconMap[side.category]} 
          />
        ))}
      </div>

      <div className='flex flex-wrap justify-between w-full'>
        {drinks.map((drink) => (
          <FoodCards 
            key={drink.name}
            name={drink.name} 
            description={drink.description} 
            price={drink.price} 
            backgroundPosition="50% 100%"
            backgroundImage={imageMap[drink.name]} 
            typeIcon={iconMap[drink.category]} 
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
