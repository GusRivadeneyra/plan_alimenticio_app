import { menuBuilder, optionsBuilder, contactBuilder } from "./builder.js";

const DATA = {
  menu: {
    title: "Menu Principal",
    mainImage: "images/FOTO1.jpg",
    description: "El primer menu de este proyecto",
    owner: "Gustavo R.",
    options: ["001"],
  },
  options: [
    {
      id: "001",
      name: "Cereal con platano",
      ingredients: ["cereal", "leche", "platano"],
    },
    {
      id: "002",
      name: "Chocomilk",
      ingredients: ["leche", "chocolate", "palomitas"],
    },
  ],
  contacto: {
    name: "Gustavo R.",
    address: "C. Siempre Alegre #01",
    phone: "+52 333 000 3333",
    email: "rivadeneyra.g@gmail.com",
  },
};

export const PATHS = {
  menu: {
    id: "menu",
    path: "/menu",
    htmlContent: menuBuilder(DATA),
    navTitle: "Menu",
  },
  options: {
    id: "options",
    path: "/options",
    htmlContent: optionsBuilder(DATA.options),
    navTitle: "Opciones",
  },
  contacto: {
    id: "contacto",
    path: "/contacto",
    htmlContent: contactBuilder(DATA.contacto),
    navTitle: "Contacto",
  },
};

window.PATHS = PATHS;
