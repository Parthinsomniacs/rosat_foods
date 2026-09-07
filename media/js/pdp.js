// ==========================================================================
// ROAST FOODS - PRODUCT DETAIL PAGE (PDP) CONTROLLER
// Complete Authentic Product Catalog from roastfoods.com/shop/
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const productsDB = {
  "makhana-bbq": {
    "id": "makhana-bbq",
    "aliases": [
      "barbeque",
      "makhana-barbeque"
    ],
    "title": "Makhana-Barbeque",
    "category": "Makhana",
    "categorySlug": "makhana.html",
    "price": 180,
    "weight": "70g (2.5 OZ)",
    "stageBg": "#FEEDE6",
    "badge": "Bestseller \u2605 Smoky Sweet",
    "img": "media/Images/Product Image/makhana_bbq_front.png",
    "gallery": [
      "media/Images/Product Image/makhana_bbq_front.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "A globally loved blend of irresistible smoky sweet flavours!",
    "fullDesc": "Makhana's are also popularly known as Popped Water Lily Seeds or Foxnuts. This amazing plant-based snack is light, crunchy and power house of nutrition. Makhana's are an exceptional source of nutrients that strike an ideal balance between well-being and indulgence!",
    "ingredients": "Makhana (Popped Water Lily Seeds), Edible Vegetable Oil (Sunflower Oil), Onion, Tomato, Chilli, Garlic, Salt, Citric Acid.",
    "related": [
      "trial-pack",
      "makhana-chocolate",
      "makhana-sour-cream",
      "makhana-cheese"
    ]
  },
  "makhana-cheese": {
    "id": "makhana-cheese",
    "aliases": [
      "cheese-herbs",
      "makhana-cheese-herbs"
    ],
    "title": "Makhana-Cheese & Herbs",
    "category": "Makhana",
    "categorySlug": "makhana.html",
    "price": 180,
    "weight": "70g (2.5 OZ)",
    "stageBg": "#FFF4F0",
    "badge": "Artisan Cheesy Crunch",
    "img": "media/Images/Product Image/7.png",
    "gallery": [
      "media/Images/Product Image/7.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "A timeless combo of delectable cheese and aromatic herbs!",
    "fullDesc": "Makhana's are also popularly known as Popped Water Lily Seeds or Foxnuts. This amazing plant-based snack is light, crunchy and power house of nutrition. Makhana's are an exceptional source of nutrients that strike an ideal balance between well-being and indulgence!",
    "ingredients": "Makhana (Popped Water Lily Seeds), Edible Vegetable Oil (Sunflower Oil), Cheese, Milk Powder, Black Pepper, Parsley, Salt.",
    "related": [
      "makhana-bbq",
      "makhana-jalapeno",
      "makhana-sour-cream",
      "trial-pack"
    ]
  },
  "makhana-jalapeno": {
    "id": "makhana-jalapeno",
    "aliases": [
      "cheesy-jalapeno",
      "makhana-cheesy-jalapeno"
    ],
    "title": "Makhana-Cheesy Jalapeno",
    "category": "Makhana",
    "categorySlug": "makhana.html",
    "price": 180,
    "weight": "70g (2.5 OZ)",
    "stageBg": "#FEEDE6",
    "badge": "Spicy & Cheesy Zing",
    "img": "media/Images/Product Image/8.png",
    "gallery": [
      "media/Images/Product Image/8.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "Indulge in an enduring kick of Jalapenos blended with a creamy and salty twist!",
    "fullDesc": "Makhana's are also popularly known as Popped Water Lily Seeds or Foxnuts. This amazing plant-based snack is light, crunchy and power house of nutrition. Makhana's are an exceptional source of nutrients that strike an ideal balance between well-being and indulgence!",
    "ingredients": "Makhana (Popped Water Lily Seeds), Edible Vegetable Oil (Sunflower Oil), Jalapeno, Cheese, Onion, Garlic, Soya Sauce, Milk Solids, Sugar, Salt, Citric Acid.",
    "related": [
      "makhana-bbq",
      "makhana-cheese",
      "makhana-salt",
      "trial-pack"
    ]
  },
  "makhana-chocolate": {
    "id": "makhana-chocolate",
    "aliases": [
      "gourmet-chocolate",
      "makhana-gourmet-chocolate"
    ],
    "title": "Makhana-Gourmet Chocolate",
    "category": "Makhana",
    "categorySlug": "makhana.html",
    "price": 180,
    "weight": "70g (2.5 OZ)",
    "stageBg": "#FFF4F0",
    "badge": "Sweet Tooth Favourite",
    "img": "media/Images/Product Image/9.png",
    "gallery": [
      "media/Images/Product Image/9.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "Makhana dipped in Chocolate is happiness you can eat!",
    "fullDesc": "Makhana's are also popularly known as Popped Water Lily Seeds or Foxnuts. This amazing plant-based snack is light, crunchy and power house of nutrition. Makhana's are an exceptional source of nutrients that strike an ideal balance between well-being and indulgence!",
    "ingredients": "Makhana (Popped Water Lily Seeds), Cocoa Solids, Sugar, Edible Vegetable Fat, Emulsifiers (INS 491, INS 322), Natural Vanilla Extract, Glazing Agent (904).",
    "related": [
      "trial-pack",
      "makhana-bbq",
      "makhana-salt",
      "ragi-chocolate"
    ]
  },
  "makhana-salt": {
    "id": "makhana-salt",
    "aliases": [
      "himalayan-salt",
      "makhana-himalayan-salt"
    ],
    "title": "Makhana-Himalayan Salt",
    "category": "Makhana",
    "categorySlug": "makhana.html",
    "price": 180,
    "weight": "70g (2.5 OZ)",
    "stageBg": "#FEEDE6",
    "badge": "Pure & Mineral Rich",
    "img": "media/Images/Product Image/10.png",
    "gallery": [
      "media/Images/Product Image/10.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "Savour the natural salty flavour extracted from the lap of the Himalayas!",
    "fullDesc": "Makhana's are also popularly known as Popped Water Lily Seeds or Foxnuts. This amazing plant-based snack is light, crunchy and power house of nutrition. Makhana's are an exceptional source of nutrients that strike an ideal balance between well-being and indulgence!",
    "ingredients": "Makhana (Popped Water Lily Seeds), Edible Vegetable Oil (Sunflower Oil), Himalayan Salt.",
    "related": [
      "makhana-bbq",
      "makhana-cheese",
      "makhana-thai-chilli",
      "trial-pack"
    ]
  },
  "makhana-sour-cream": {
    "id": "makhana-sour-cream",
    "aliases": [
      "natural-extracted-olive-oil",
      "sour-cream-onion",
      "makhana-sour-cream"
    ],
    "title": "Makhana-Sour Cream & Onion",
    "category": "Makhana",
    "categorySlug": "makhana.html",
    "price": 180,
    "weight": "70g (2.5 OZ)",
    "stageBg": "#E8F5E9",
    "badge": "Classic Tangy Crunch",
    "img": "media/Images/Product Image/makhana_sour_cream.png",
    "gallery": [
      "media/Images/Product Image/makhana_sour_cream.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "Blended with thick sour cream and minced onions.",
    "fullDesc": "Makhana's are also popularly known as Popped Water Lily Seeds or Foxnuts. This amazing plant-based snack is light, crunchy and power house of nutrition. Makhana's are an exceptional source of nutrients that strike an ideal balance between well-being and indulgence!",
    "ingredients": "Makhana, Edible Vegetable Oil (Sunflower oil), Onion Powder, Milk Solids, Starch, Herbs, Sugar, Salt.",
    "related": [
      "makhana-bbq",
      "makhana-cheese",
      "makhana-jalapeno",
      "trial-pack"
    ]
  },
  "makhana-thai-chilli": {
    "id": "makhana-thai-chilli",
    "aliases": [
      "thai-sweet-chilli",
      "makhana-thai-sweet-chilli"
    ],
    "title": "Makhana-Thai Sweet Chilli",
    "category": "Makhana",
    "categorySlug": "makhana.html",
    "price": 180,
    "weight": "70g (2.5 OZ)",
    "stageBg": "#FBE9E7",
    "badge": "Exotic Sweet & Tangy",
    "img": "media/Images/Product Image/makhana_sweet_chilli.png",
    "gallery": [
      "media/Images/Product Image/makhana_sweet_chilli.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "Inspired by the tropical flavours emerging from the Far East!",
    "fullDesc": "Makhana's are also popularly known as Popped Water Lily Seeds or Foxnuts. This amazing plant-based snack is light, crunchy and power house of nutrition. Makhana's are an exceptional source of nutrients that strike an ideal balance between well-being and indulgence!",
    "ingredients": "Makhana (Popped Water Lily Seeds), Edible Vegetable Oil (Sunflower Oil), Chilli, Garlic, Onion, Soya, Tamarind, Cheese, Lemon, Sugar, Salt, Citric Acid.",
    "related": [
      "makhana-bbq",
      "makhana-peri-peri",
      "makhana-sour-cream",
      "trial-pack"
    ]
  },
  "makhana-peri-peri": {
    "id": "makhana-peri-peri",
    "aliases": [
      "peri-peri",
      "makhana-peri-peri"
    ],
    "title": "Makhana-Peri Peri",
    "category": "Makhana",
    "categorySlug": "makhana.html",
    "price": 180,
    "weight": "70g (2.5 OZ)",
    "stageBg": "#FFEBEE",
    "badge": "Fiery African Spices",
    "img": "media/Images/Product Image/8.png",
    "gallery": [
      "media/Images/Product Image/8.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "Traditional African spices blended to deliver a hot and tangy finger licking experience!",
    "fullDesc": "Makhana's are also popularly known as Popped Water Lily Seeds or Foxnuts. This amazing plant-based snack is light, crunchy and power house of nutrition. Makhana's are an exceptional source of nutrients that strike an ideal balance between well-being and indulgence!",
    "ingredients": "Makhana (Popped Water Lily Seeds), Edible Vegetable Oil (Sunflower Oil), Chilli, Garlic, Oregano, Onion, Black Pepper, Tamarind, Sugar, Salt, Citric Acid.",
    "related": [
      "makhana-bbq",
      "makhana-thai-chilli",
      "jowar-peri-peri",
      "trial-pack"
    ]
  },
  "jowar-cheese": {
    "id": "jowar-cheese",
    "aliases": [
      "cheese-herb-jower-puff"
    ],
    "title": "Jowar Puffs-Cheese & Herbs",
    "category": "Jowar Puff",
    "categorySlug": "jowar-puff.html",
    "price": 90,
    "weight": "70g (2.5 OZ)",
    "stageBg": "#FFF4F0",
    "badge": "Ancient Grain Popped",
    "img": "media/Images/Product Image/1.png",
    "gallery": [
      "media/Images/Product Image/1.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "The perfect combo of delectable cheese and aromatic herbs!",
    "fullDesc": "Jowar also popularly known as Sorghum, an ancient grain touted as the fifth most popular cereal crop in the world. It is a nutrient-rich, plant-based protein source that is naturally gluten-free and high in antioxidants and also a good source fibre.",
    "ingredients": "Jowar Flour, Edible Vegetable Oil (Sunflower Oil), Cheese, Milk Powder, Black Pepper, Parsley, Salt.",
    "related": [
      "jowar-jalapeno",
      "jowar-spices",
      "jowar-tomato",
      "trial-pack"
    ]
  },
  "jowar-jalapeno": {
    "id": "jowar-jalapeno",
    "aliases": [
      "cheesy-jalapeno-jower-puff"
    ],
    "title": "Jowar Puffs-Cheesy Jalapeno",
    "category": "Jowar Puff",
    "categorySlug": "jowar-puff.html",
    "price": 90,
    "weight": "70g (2.5 OZ)",
    "stageBg": "#FEEDE6",
    "badge": "Spicy Sorghum Bites",
    "img": "media/Images/Product Image/2.png",
    "gallery": [
      "media/Images/Product Image/2.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "Salty and creamy with an Jalapeno kick!",
    "fullDesc": "Jowar also popularly known as Sorghum, an ancient grain touted as the fifth most popular cereal crop in the world. It is a nutrient-rich, plant-based protein source that is naturally gluten-free and high in antioxidants and also a good source fibre.",
    "ingredients": "Jowar Flour, Edible Vegetable Oil (Sunflower Oil), Cheese, Jalapeno, Chilli, Onion, Garlic, Ginger, Milk Solid, Sugar, Salt, Acidity Regulator (Citric Acid).",
    "related": [
      "jowar-cheese",
      "jowar-peri-peri",
      "jowar-tomato",
      "trial-pack"
    ]
  },
  "jowar-spices": {
    "id": "jowar-spices",
    "aliases": [
      "indian-spices-jower-puff"
    ],
    "title": "Jowar Puffs-Indian Spices",
    "category": "Jowar Puff",
    "categorySlug": "jowar-puff.html",
    "price": 90,
    "weight": "70g (2.5 OZ)",
    "stageBg": "#FFF9E6",
    "badge": "Desi Masala Magic",
    "img": "media/Images/Product Image/3.png",
    "gallery": [
      "media/Images/Product Image/3.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "Classic Indian spices slow roasted onto crisp, light sorghum spheres.",
    "fullDesc": "Jowar also popularly known as Sorghum, an ancient grain touted as the fifth most popular cereal crop in the world. It is a nutrient-rich, plant-based protein source that is naturally gluten-free and high in antioxidants and also a good source fibre.",
    "ingredients": "Jowar Flour, Edible Vegetable Oil (Sunflower Oil), Corriander, Fenugreek, Turmeric, Cumin, Chilli Powder, Cardamom, Clove, Ginger, Sugar, Salt, Acidity Regulator (Citric Acid).",
    "related": [
      "jowar-cheese",
      "jowar-tomato",
      "jowar-jalapeno",
      "trial-pack"
    ]
  },
  "jowar-peri-peri": {
    "id": "jowar-peri-peri",
    "aliases": [
      "peri-peri-2"
    ],
    "title": "Jowar Puffs-Peri Peri",
    "category": "Jowar Puff",
    "categorySlug": "jowar-puff.html",
    "price": 90,
    "weight": "70g (2.5 OZ)",
    "stageBg": "#FFEBEE",
    "badge": "Fiery Crunch",
    "img": "media/Images/Product Image/4.png",
    "gallery": [
      "media/Images/Product Image/4.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "Relish the traditional spicy sweet flavours of Africa!",
    "fullDesc": "Jowar also popularly known as Sorghum, an ancient grain touted as the fifth most popular cereal crop in the world. It is a nutrient-rich, plant-based protein source that is naturally gluten-free and high in antioxidants and also a good source fibre.",
    "ingredients": "Jowar Flour, Edible Vegetable Oil (Sunflower Oil), Garlic, Oregano, Onion, Tamarind, Chilli, Black Pepper, Sugar, Salt, Acidity Regulator (Citric Acid).",
    "related": [
      "jowar-cheese",
      "jowar-spices",
      "makhana-peri-peri",
      "trial-pack"
    ]
  },
  "jowar-tomato": {
    "id": "jowar-tomato",
    "aliases": [
      "tomato",
      "jowar-tomato"
    ],
    "title": "Jowar Puffs-Tangy Tomato",
    "category": "Jowar Puff",
    "categorySlug": "jowar-puff.html",
    "price": 90,
    "weight": "70g (2.5 OZ)",
    "stageBg": "#FFF0E6",
    "badge": "Sweet & Tangy",
    "img": "media/Images/Product Image/5.png",
    "gallery": [
      "media/Images/Product Image/5.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "A sweetly tangy twist for your taste buds!",
    "fullDesc": "Jowar also popularly known as Sorghum, an ancient grain touted as the fifth most popular cereal crop in the world. It is a nutrient-rich, plant-based protein source that is naturally gluten-free and high in antioxidants and also a good source fibre.",
    "ingredients": "Jowar Flour, Edible Vegetable Oil (Sunflower Oil), Tomato, Sugar, Salt, Ginger, Garlic, Onion, Cumin, Chilli, Black Pepper, Nutmeg, Clove, Cinnamon, Sugar, Salt, Acidity Regulator (Citric Acid).",
    "related": [
      "jowar-cheese",
      "jowar-jalapeno",
      "jowar-spices",
      "trial-pack"
    ]
  },
  "chips-bbq": {
    "id": "chips-bbq",
    "aliases": [
      "5870",
      "whole-grain-chips-barbeque",
      "chips-barbeque"
    ],
    "title": "Whole Grain Chips-Barbeque",
    "category": "Whole Grain Chips",
    "categorySlug": "whole-grain-chips.html",
    "price": 110,
    "weight": "100g (3.52 OZ)",
    "stageBg": "#FEEDE6",
    "badge": "Millet Multi-Grain",
    "img": "media/Images/Product Image/chips_barbeque.png",
    "gallery": [
      "media/Images/Product Image/chips_barbeque.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "These crunchy Barbeque chips have a taste to remember!",
    "fullDesc": "Our whole grain chips are crafted using a combination of JAWAR, BAJRA, and RAGI. These whole grains offer a higher nutritional content compared to refined cereals such as wheat or corn. Millets, including bajra and ragi, are known to be excellent sources of minerals, dietary fiber, vitamins, and protein.",
    "ingredients": "Jowar (Sorghum), Bajra (Pearl Millet), Ragi (Finger Millet), Rice, Sunflower oil, Sugar, Salt, Maltodextrin(corn), Garlic, Onion, Coriander, HVP (soya), Acidity Regulator (INS 262(ii), INS 296), Yeast Extract Powder, Natural & Nature Identical Flavouring substances, Milk Solids, Anticaking Agent (INS 551) flavour Enhancer (INS 627, INS 631) and Antioxidant (E-321).",
    "related": [
      "chips-cheese",
      "chips-jalapeno",
      "millet-namkeen",
      "trial-pack"
    ]
  },
  "chips-cheese": {
    "id": "chips-cheese",
    "aliases": [
      "buttery-cheese-whole-grain-chips",
      "chips-buttery-cheese"
    ],
    "title": "Whole Grain Chips-Buttery Cheese",
    "category": "Whole Grain Chips",
    "categorySlug": "whole-grain-chips.html",
    "price": 110,
    "weight": "100g (3.52 OZ)",
    "stageBg": "#FFF4F0",
    "badge": "Creamy & Buttery",
    "img": "media/Images/Product Image/chips_buttery_cheese.png",
    "gallery": [
      "media/Images/Product Image/chips_buttery_cheese.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "Creamy and buttery to satisfy your taste buds.",
    "fullDesc": "Our whole grain chips are crafted using a combination of JAWAR, BAJRA, and RAGI. These whole grains offer a higher nutritional content compared to refined cereals such as wheat or corn. Millets, including bajra and ragi, are known to be excellent sources of minerals, dietary fiber, vitamins, and protein.",
    "ingredients": "Jowar (Sorghum), Bajra (Pearl Millet), Ragi (Finger Millet), Rice, Sunflower oil, Maltodextrin(corn), Soy powder, Onion, Garlic, Aromatic mix, Sugar, Turmeric, Salt, Oregano and Antioxidant (E-321).",
    "related": [
      "chips-bbq",
      "chips-jalapeno",
      "ragi-masala",
      "trial-pack"
    ]
  },
  "chips-jalapeno": {
    "id": "chips-jalapeno",
    "aliases": [
      "jalapeno",
      "chips-jalapeno"
    ],
    "title": "Whole Grain Chips-Sizzling Jalapeno",
    "category": "Whole Grain Chips",
    "categorySlug": "whole-grain-chips.html",
    "price": 110,
    "weight": "100g (3.52 OZ)",
    "stageBg": "#FEEDE6",
    "badge": "Zesty & Sizzling",
    "img": "media/Images/Product Image/chips_jalapeno.png",
    "gallery": [
      "media/Images/Product Image/chips_jalapeno.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "Sizzling kick of Jalapeno that no one wants to miss!",
    "fullDesc": "Our whole grain chips are crafted using a combination of JAWAR, BAJRA, and RAGI. These whole grains offer a higher nutritional content compared to refined cereals such as wheat or corn. Millets, including bajra and ragi, are known to be excellent sources of minerals, dietary fiber, vitamins, and protein.",
    "ingredients": "Jowar (Sorghum), Bajra (Pearl Millet), Ragi (Finger Millet), Rice, Sunflower oil, Seasoning: (Maltodextrin, Aromatic Mix, Salt, Onion, Garlic, Chilli, Ginger, Red chilli Capsicum, Jalapeno, Citric Acid), Antioxidant (E-321).",
    "related": [
      "chips-bbq",
      "chips-cheese",
      "millet-namkeen",
      "trial-pack"
    ]
  },
  "millet-namkeen": {
    "id": "millet-namkeen",
    "aliases": [
      "millet-namkeen"
    ],
    "title": "Millet Namkeen",
    "category": "Millet Namkeen",
    "categorySlug": "millet-namkeen.html",
    "price": 120,
    "weight": "140g (5 OZ)",
    "stageBg": "#FFF9E6",
    "badge": "Ancient 4-Millet Mix",
    "img": "media/Images/Product Image/millet_namkeen.png",
    "gallery": [
      "media/Images/Product Image/millet_namkeen.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "Your perfect chai snack with balanced nutrition and taste!",
    "fullDesc": "A crunchy power mix of 4 ancient whole millets (Jowar, Ragi, Bajra, and Rajgira) roasted to perfection and tossed in authentic Indian teatime spices with zero palm oil.",
    "ingredients": "Jowar, Ragi, Bajra, Rajgira, Sunflower Oil, Sugar, Salt, Turmeric, Coriander, Chillic, Curry leaves, Cumin, Garlic, Onion, Ginger, Black Pepper, Clove, Fennel, Anticaking Agent (E-551), Flavour Enhancer (E-627, 631), Antioxidant (E-321) and Citric Acid.",
    "related": [
      "trial-pack",
      "chips-bbq",
      "ragi-masala",
      "makhana-bbq"
    ]
  },
  "ragi-chocolate": {
    "id": "ragi-chocolate",
    "aliases": [
      "ragi-stic-chocolate",
      "ragi-stix-chocolate"
    ],
    "title": "Ragi Stix-Chocolate",
    "category": "Ragi Stix",
    "categorySlug": "ragi-stix.html",
    "price": 100,
    "weight": "100g (3.52 OZ)",
    "stageBg": "#FFF4F0",
    "badge": "Sweet Finger Millet Stix",
    "img": "media/Images/Product Image/ragi_chocolate.png",
    "gallery": [
      "media/Images/Product Image/ragi_chocolate.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "Crunchy and creamy snacks for your sweet tooth!",
    "fullDesc": "Crunchy extruded finger millet (Ragi) sticks generously infused with rich chocolate cocoa solids. 100% roasted, high in dietary calcium and natural antioxidants.",
    "ingredients": "Ragi, Rice, Cocoa Solids, Sugar, Edible Vegetable Fat, Natural Vanilla Extract, Glazing Agent.",
    "related": [
      "ragi-masala",
      "makhana-chocolate",
      "trial-pack",
      "chips-cheese"
    ]
  },
  "ragi-masala": {
    "id": "ragi-masala",
    "aliases": [
      "ragi-stix-masalawhole-grain-chips",
      "ragi-stix-masala"
    ],
    "title": "Ragi Stix-Masala",
    "category": "Ragi Stix",
    "categorySlug": "ragi-stix.html",
    "price": 100,
    "weight": "100g (3.52 OZ)",
    "stageBg": "#FFF0E6",
    "badge": "Spiced Finger Millet",
    "img": "media/Images/Product Image/ragi_masala.png",
    "gallery": [
      "media/Images/Product Image/ragi_masala.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "With its crunchy texture and unmistakable flavour of masala, this snack is truly addictive",
    "fullDesc": "Crispy finger millet (Ragi) sticks tossed in signature Indian chaat masala spices. High calcium, 0% palm oil, and maximum crunch for wholesome everyday snacking.",
    "ingredients": "Ragi, Rice, Sunflower oil, Seasoning: (Garlic, Red chilli, Sugar, Salt, Turmeric, Ginger, Cumin, Onion, Fennel, Citric Acid & Soy.",
    "related": [
      "ragi-chocolate",
      "millet-namkeen",
      "chips-bbq",
      "trial-pack"
    ]
  },
  "trial-pack": {
    "id": "trial-pack",
    "aliases": [
      "trial-pack-5-healthy-snacks",
      "trial-pack"
    ],
    "title": "Trial Pack (5 Healthy Snacks)",
    "category": "Trial Pack",
    "categorySlug": "trial-pack.html",
    "price": 399,
    "weight": "Box of 5 Snacks (350g)",
    "stageBg": "#FFF9E6",
    "badge": "Super Saver \u2605 5 Top Flavours",
    "img": "media/Images/Product Image/trial_pack.png",
    "gallery": [
      "media/Images/Product Image/trial_pack.png",
      "media/Images/Product Image/makhana_bbq_back.png",
      "media/Images/Product Image/makhana_bbq_nutrition.png",
      "media/Images/Product Image/makhana_bowl.png"
    ],
    "shortDesc": "Can't decide which healthy snacks to choose? Start with our guilt-free Trial Pack that includes all 5 snacks (best flavors). As always, all snacks are roasted not fried.",
    "fullDesc": "5 variety of flavors! Includes: 1. Jowar Puffs \u2013 Indian Spices x 1 | 2. Ragi Stix \u2013 Masala x 1 | 3. Makhana \u2013 Himalayan Salt x 1 | 4. Millet \u2013 Namkeen x 1 | 5. Whole Grain Chips \u2013 Barbeque x 1. Can't decide which healthy snacks to choose? Start with our guilt-free Trial Pack that includes all 5 snacks (best flavors). As always, all snacks are roasted not fried.",
    "ingredients": "Assortment of roasted popped water lily seeds, popped sorghum, whole grain chips, ragi stix, and 4-millet mixture. 100% roasted with 0% palm oil.",
    "related": [
      "makhana-bbq",
      "jowar-cheese",
      "chips-bbq",
      "millet-namkeen"
    ]
  }
};

  // 1. Identify Product from URL Query String
  const urlParams = new URLSearchParams(window.location.search);
  let prodId = urlParams.get('id') || urlParams.get('product') || 'makhana-bbq';
  prodId = prodId.toLowerCase().trim();
  
  // Normalize if user passed short ID or full ID or alias
  let product = productsDB[prodId];
  if (!product) {
    // Search by alias or slug
    const foundKey = Object.keys(productsDB).find(k => {
      const p = productsDB[k];
      if (k === prodId) return true;
      if (p.aliases && p.aliases.includes(prodId)) return true;
      if (k.includes(prodId) || prodId.includes(k)) return true;
      return false;
    });
    product = foundKey ? productsDB[foundKey] : productsDB['makhana-bbq'];
  }

  // 2. Render Product Details into DOM
  const displayTitle = product.title;
  document.title = `${displayTitle} - Roast Foods (Roasted, Not Fried)`;
  
  const elCategoryLink = document.getElementById('pdpCategoryLink');
  if (elCategoryLink) {
    elCategoryLink.textContent = product.category;
    elCategoryLink.href = product.categorySlug || 'makhana.html';
  }

  const elTitleText = document.getElementById('pdpTitleText');
  if (elTitleText) {
    elTitleText.textContent = displayTitle;
  }

  const elReviewTitle = document.getElementById('pdpReviewProdTitle');
  if (elReviewTitle) {
    elReviewTitle.textContent = displayTitle;
  }

  const elPriceAmount = document.getElementById('pdpPriceAmount');
  if (elPriceAmount) {
    elPriceAmount.textContent = `₹${Number(product.price).toFixed(2)}`;
  }

  const elFlavourDesc = document.getElementById('pdpFlavourDesc');
  if (elFlavourDesc) {
    elFlavourDesc.textContent = product.shortDesc || 'A globally loved blend of irresistible smoky sweet flavours!';
  }

  const elNetWeight = document.getElementById('pdpNetWeight');
  if (elNetWeight) {
    elNetWeight.textContent = `Net Weight – ${product.weight}`;
  }

  const elIngredients = document.getElementById('pdpIngredients');
  if (elIngredients) {
    elIngredients.textContent = `Ingredients- ${product.ingredients}`;
  }

  const elTabDescText = document.getElementById('pdpTabDescText');
  if (elTabDescText && product.fullDesc) {
    elTabDescText.textContent = product.fullDesc;
  }

  const elTabIngredientsText = document.getElementById('pdpTabIngredientsText');
  if (elTabIngredientsText && product.ingredients) {
    elTabIngredientsText.textContent = product.ingredients;
  }

  // 3. Product Gallery & Robust Thumbnails Switching
  const elMainImage = document.getElementById('pdpMainImage');
  const elThumbStrip = document.getElementById('pdpThumbnailsStrip');

  const galleryImages = product.gallery && product.gallery.length > 0 ? product.gallery : [
    product.img,
    'media/Images/Product Image/makhana_bbq_back.png',
    'media/Images/Product Image/makhana_bbq_nutrition.png',
    'media/Images/Product Image/makhana_bowl.png'
  ];

  if (elMainImage) {
    elMainImage.src = galleryImages[0];
    elMainImage.alt = displayTitle;
  }

  // Global helper for instant thumbnail switching
  window.switchPdpThumb = function(thumbElement) {
    if (!thumbElement) return;
    const allThumbs = document.querySelectorAll('.pdp-thumb-item');
    allThumbs.forEach(t => t.classList.remove('active'));
    thumbElement.classList.add('active');

    const targetSrc = thumbElement.getAttribute('data-img');
    if (elMainImage && targetSrc) {
      elMainImage.src = targetSrc;
    }
  };

  if (elThumbStrip) {
    elThumbStrip.innerHTML = galleryImages.map((imgSrc, idx) => `
      <div class="pdp-thumb-item ${idx === 0 ? 'active' : ''}" data-img="${imgSrc}" onclick="window.switchPdpThumb(this)" title="View Image ${idx + 1}">
        <img src="${imgSrc}" alt="Thumbnail ${idx + 1}">
      </div>
    `).join('');

    // Event delegation on thumbnails strip (both click and hover)
    elThumbStrip.addEventListener('click', (e) => {
      const thumb = e.target.closest('.pdp-thumb-item');
      if (thumb) window.switchPdpThumb(thumb);
    });

    elThumbStrip.addEventListener('mouseover', (e) => {
      const thumb = e.target.closest('.pdp-thumb-item');
      if (thumb) window.switchPdpThumb(thumb);
    });
  }

  // Zoom Button Interactive Feedback
  const pdpZoomBtn = document.getElementById('pdpZoomBtn');
  if (pdpZoomBtn && elMainImage) {
    let isZoomed = false;
    pdpZoomBtn.addEventListener('click', () => {
      isZoomed = !isZoomed;
      if (isZoomed) {
        elMainImage.style.transform = 'scale(1.35)';
        elMainImage.style.cursor = 'zoom-out';
      } else {
        elMainImage.style.transform = 'scale(1)';
        elMainImage.style.cursor = 'default';
      }
    });

    elMainImage.addEventListener('click', () => {
      if (isZoomed) {
        isZoomed = false;
        elMainImage.style.transform = 'scale(1)';
        elMainImage.style.cursor = 'default';
      }
    });
  }

  // 4. Quantity & Add to Cart Integration
  const pdpCartQty = document.getElementById('pdpCartQty');
  const pdpCartBtn = document.getElementById('pdpCartBtn');

  if (pdpCartBtn) {
    pdpCartBtn.addEventListener('click', () => {
      const quantity = parseInt(pdpCartQty ? pdpCartQty.value : 1, 10) || 1;

      if (typeof window.addToCartGlobal === 'function') {
        window.addToCartGlobal({
          id: product.id,
          name: displayTitle,
          price: product.price,
          qty: quantity,
          img: galleryImages[0] || product.img
        });
      } else {
        const cartHeaderBtn = document.getElementById('cartHeaderBtn');
        if (cartHeaderBtn) {
          cartHeaderBtn.click();
        }
      }
    });
  }

  // 5. Product Details Tabs Switching
  const tabItems = document.querySelectorAll('.pdp-tab-item');
  const tabPanels = {
    'description': document.getElementById('pdpTabDescription'),
    'ingredients': document.getElementById('pdpTabIngredients'),
    'reviews': document.getElementById('pdpTabReviews')
  };

  tabItems.forEach(tab => {
    const handleTabSwitch = () => {
      const targetTabKey = tab.getAttribute('data-tab');
      tabItems.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      Object.keys(tabPanels).forEach(key => {
        if (tabPanels[key]) {
          if (key === targetTabKey) {
            tabPanels[key].classList.add('active');
          } else {
            tabPanels[key].classList.remove('active');
          }
        }
      });
    };

    tab.addEventListener('click', handleTabSwitch);
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleTabSwitch();
      }
    });
  });

  // 6. Related Products Grid Population with Burst Hover Effect
  const relatedContainer = document.getElementById('pdpRelatedGrid');
  const relatedKeys = (product.related && product.related.length > 0)
    ? product.related
    : ['trial-pack', 'makhana-chocolate', 'makhana-sour-cream', 'makhana-cheese'];

  if (relatedContainer) {
    const relatedCardsHtml = relatedKeys.map(relId => {
      const rel = productsDB[relId];
      if (!rel) return '';

      const isTrialPack = rel.id === 'trial-pack';
      const burstImg = (rel.category === 'Jowar Puff') ? 'media/Images/burst_jowar_puffs.png' : 'media/Images/burst_makhana_seeds.png';

      const burstHtml = isTrialPack ? '' : `
        <div class="snack-burst-layer">
          <img src="${burstImg}" alt="Bursting Roasted Snacks" class="burst-flock-img" loading="lazy">
          <div class="snack-particles-cloud">
            <span class="fly-particle fp-1"></span>
            <span class="fly-particle fp-2"></span>
            <span class="fly-particle fp-3"></span>
          </div>
        </div>
      `;

      return `
        <div class="product-card snack-interactive-card ${isTrialPack ? 'no-burst' : ''}" data-category="${(rel.category || 'makhana').toLowerCase()}">
          <div class="snack-stage-box" style="--stage-bg: ${rel.stageBg || '#FEEDE6'};">
            <div class="snack-pouch-layer">
              ${burstHtml}
              <a href="product-detail.html?id=${rel.id}" class="snack-pouch-link">
                <img src="${rel.img}" alt="${rel.title}" class="snack-pouch-img" loading="lazy">
              </a>
            </div>
            <button class="stage-quick-pill btn-add-cart" 
                    data-id="${rel.id}" 
                    data-name="${rel.title}" 
                    data-price="${rel.price}" 
                    data-img="${rel.img}" 
                    title="Add to Cart">
              <i class="fa-solid fa-plus"></i> Quick Add
            </button>
          </div>
          <div class="snack-details-box">
            <span class="snack-category-tag">${(rel.category || 'SNACK').toUpperCase()}</span>
            <h3 class="snack-item-name"><a href="product-detail.html?id=${rel.id}" style="color:inherit;text-decoration:none;">${rel.title}</a></h3>
            <div class="snack-price-row">
              <span class="snack-price-val">₹${Number(rel.price).toFixed(2)}</span>
              <button class="snack-add-icon-btn btn-add-cart" 
                      data-id="${rel.id}" 
                      data-name="${rel.title}" 
                      data-price="${rel.price}" 
                      data-img="${rel.img}" 
                      title="Add to Cart">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    relatedContainer.innerHTML = relatedCardsHtml;

    // Attach cart listener to all related buttons
    const relatedAddBtns = relatedContainer.querySelectorAll('.btn-add-cart');
    relatedAddBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.dataset.id;
        const name = btn.dataset.name;
        const price = parseInt(btn.dataset.price, 10) || 0;
        const img = btn.dataset.img;
        if (typeof window.addToCartGlobal === 'function') {
          window.addToCartGlobal({ id, name, price, qty: 1, img });
        }
      });
    });
  }
});
