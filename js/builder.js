export const htmlBuilder = () => {};

export const optionsBuilder = (options) => {
  if (!options.length) {
    return null;
  }
  const optionsArr = options.map(
    (option) => `<div> class="options"${option.name}</div>`
  );
  const optionsStr = optionsArr.join("");
  return optionsStr;
};

export const contactBuilder = (contactData) => `
<div class="contact">
    <h3>Mi nombre ${contactData.name}</h3>
    </br>
    <h4>me encuentras en: ${contactData.address}</h4>
    </br>
    <h4>Datos de contacto</h4>
    <ul>
        <li>telefono: ${contactData.phone}</li>
        <li>email: ${contactData.email}</li>
    </ul>
    <h3>Soy boxeador, ven a mi casa y demonos un tiro</h3>
</div>

`;

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

  return `
    <div class="menu">
        <h3>${menuData.title}</h3>
        <h4>Usuario: ${menuData.owner}</h4>
        <img src="${menuData.mainImage}" />
        <div>
            <h4>Opciones disponibles</h4>
            <div>${optionsHTMLString}</div>
        </div>
    </div>
  `;
};
