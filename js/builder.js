export const htmlBuilder = () => {};

const getTextNode = (text) => {
  return document.createTextNode(text);
};

const getButton = (buttonText, className) => {
  const buttonElement = document.createElement("button");
  buttonElement.appendChild(getTextNode(buttonText));
  buttonElement.className = className;
  return buttonElement;
};

function getIngredientsDiv(ingredients) {
  const mainDiv = document.createElement("div");
  ingredients.map((ingr) => {
    const ingredientDiv = document.createElement("div");
    ingredientDiv.appendChild(getTextNode(ingr));
    mainDiv.appendChild(ingredientDiv);
  });

  mainDiv.className = "ingredients";
  return mainDiv;
}

export const optionsBuilder = (options) => {
  if (!options.length) {
    return null;
  }
  const divToReturn = document.createElement("div");
  options.map((options) => {
    const niceButton = getButton(options.name, "options");
    divToReturn.appendChild(niceButton);
  });

  const ingredientsContainer = document.createElement("div");
  ingredientsContainer.classList.add("ingredients-container");

  options.map((options) => {
    const ingredientsDiv = getIngredientsDiv(options.ingredients);
    ingredientsContainer.appendChild(ingredientsDiv);
  });

  divToReturn.appendChild(ingredientsContainer);

  return divToReturn;
};

export const contactBuilder = (contactData) => {
  const createdDiv1 = document.createElement("div");
  createdDiv1.appendChild(getTextNode(contactData.name));
  createdDiv1.className = "nombre";
  const createdDiv2 = document.createElement("div");
  createdDiv2.appendChild(getTextNode(contactData.address));
  createdDiv2.className = "direccion";
  const createdDiv3 = document.createElement("div");
  createdDiv3.appendChild(getTextNode(contactData.phone));
  createdDiv3.className = "phone";
  const createdDiv4 = document.createElement("div");
  createdDiv4.appendChild(getTextNode(contactData.email));
  createdDiv4.className = "email";

  const parentDiv = document.createElement("div");
  parentDiv.className = "contact-container";

  parentDiv.appendChild(createdDiv1);
  parentDiv.appendChild(createdDiv2);
  parentDiv.appendChild(createdDiv3);
  parentDiv.appendChild(createdDiv4);

  return parentDiv;
};
// `
// <div class="contact">
//     <h3>Mi nombre ${contactData.name}</h3>
//     </br>
//     <h4>me encuentras en: ${contactData.address}</h4>
//     </br>
//     <h4>Datos de contacto</h4>
//     <ul>
//         <li>telefono: ${contactData.phone}</li>
//         <li>email: ${contactData.email}</li>
//     </ul>
//     <h3>Soy boxeador, ven a mi casa y demonos un tiro</h3>
// </div>

// `;

export const menuBuilder = (todaLaData) => {
  const menuData = todaLaData.menu; // object
  const menuDataOptions = menuData.options; // array of ids ['003']
  const optionsData = todaLaData.options; // array

  // Array of menu's title options
  const menuOptions = menuDataOptions
    .map((optionId) => {
      const matchedOption = optionsData.find((availableOption) => {
        const isMatch = availableOption.id === optionId;
        return isMatch;
      });
      if (!matchedOption) return undefined;
      return matchedOption.name;
    })
    .filter((opt) => !!opt);

  const optionsStringArr = menuOptions.map(
    (menuOption) => `<h6>${menuOption}</h6>`
  );
  const optionsHTMLString = optionsStringArr.join("");

  const image = document.createElement("img");
  image.src = "images/desayuno.jpg";
  image.className = "foto1";

  const secImage = document.createElement("img");
  secImage.src = "images/ensalada.jpg";
  secImage.className = "foto2";

  const thiImage = document.createElement("img");
  thiImage.src = "images/menestra-de-verduras-y-pescado-1.jpg";
  thiImage.className = "foto3";
  thiImage.appendChild(getTextNode('ensalda con pollo'))

  const text = document.createElement("div");
  text.niceButton = "hola"


  const returnDiv = document.createElement("div");
  returnDiv.appendChild(image);
  returnDiv.appendChild(secImage);
  returnDiv.appendChild(thiImage);
  returnDiv.appendChild(getTextNode("hola"))
  returnDiv.className = "carrusel";


  return returnDiv;

  }
  // return `
  //   <div class="menu">
  //       <h3>${menuData.title}</h3>
  //       <h4>Usuario: ${menuData.owner}</h4>
  //       <img src="${menuData.mainImage}" />
  //       <div>
  //           <h4>Opciones disponibles</h4>
  //           <div>${optionsHTMLString}</div>
  //       </div>
  //   </div>
  // `;


export const menuText = (menuBuilder) => { 
  const textoPrimero = document.createElement("div");
  textoPrimero.appendChild(getTextNode("si va a salir"));
  textoPrimero.className = "nombre";

  return menuText;     };


