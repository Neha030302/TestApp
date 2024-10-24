import Color from "./Color";
import String from "./String";

export const catList = [
  {
    id: 1,
    title: String.food1_txt,
    img: require("../assets/images/chole.png"),
  },
  {
    id: 2,
    title: String.food2_txt,
    img: require("../assets/images/pizza.png"),
  },
  {
    id: 3,
    title: String.food3_txt,
    img: require("../assets/images/sandwich.png"),
  },
  {
    id: 4,
    title: String.food4_txt,
    img: require("../assets/images/burger.png"),
  },
];

export const sortList = [
  {
    id: 1,
    title: String.popular_txt,
  },
  {
    id: 2,
    title: String.rating_txt,
  },
  {
    id: 3,
    title: String.fast_delevery_txt,
  },
  {
    id: 4,
    title: String.offer_txt,
  },
  {
    id: 5,
    title: String.sort_txt,
  },
];

export const productList = [
  {
    id: 1,
    title: "Bikaner Sweeets",
    img: require("../assets/images/item1.png"),
    ratting: "4.5",
    quantity: "Mawa Dryfruits - ₹450 kg",
    del: String.free_delevry,
    offer: String.offer_flat_txt,
    time: "30-45 mins",
    duration: "2 Km",
    sub_tag: ["Gulab Jamun", "Rasgulla", "Namkeen"],
  },
  {
    id: 2,
    title: "Bikaner Sweeets",
    img: require("../assets/images/item2.png"),
    ratting: "4.5",
    quantity: "Mawa Dryfruits - ₹450 kg",
    del: String.free_delevry,
    offer: String.offer_flat_txt,
    time: "30-45 mins",
    duration: "2 Km",
    sub_tag: ["Gulab Jamun", "Rasgulla", "Namkeen"],
  },
  {
    id: 3,
    title: "Bikaner Sweeets",
    img: require("../assets/images/item1.png"),
    ratting: "4.5",
    quantity: "Mawa Dryfruits - ₹450 kg",
    del: String.free_delevry,
    offer: String.offer_flat_txt,
    time: "30-45 mins",
    duration: "2 Km",
    sub_tag: ["Gulab Jamun", "Rasgulla", "Namkeen"],
  },
  {
    id: 4,
    title: "Bikaner Sweeets",
    img: require("../assets/images/item2.png"),
    ratting: "4.5",
    quantity: "Mawa Dryfruits - ₹450 kg",
    del: String.free_delevry,
    offer: String.offer_flat_txt,
    time: "30-45 mins",
    duration: "2 Km",
    sub_tag: ["Gulab Jamun", "Rasgulla", "Namkeen"],
  },
];

export const sliderImg = [
  {
    id: 1,
    title: "Burger Comboo",
    img: require("../assets/images/slider1.png"),
    off: `Get 
60% Off`,
    color1: Color.YELLOW_GRE1_COLOR,
    color2: Color.YELLOW_GRE2_COLOR,
  },
  {
    id: 2,
    title: "Domino’s Pizza",
    img: require("../assets/images/slider3.png"),
    off: `Get 
50% Off`,
    color1: Color.BLUE_GRE1_COLOR,
    color2: Color.BLUE_GRE2_COLOR,
  },
  {
    id: 3,
    title: String.food1_txt,
    img: require("../assets/images/slider2.png"),
    off: `Get 
60% Off`,
    color1: Color.GREEN_GRE1_COLOR,
    color2: Color.GREEN_GRE2_COLOR,
  },
];
