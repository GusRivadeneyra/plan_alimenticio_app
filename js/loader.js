const paths = window.PATHS;

function load() {
  if (!paths) return;

  // Object.entries returns an array of arrays, in each nested array is contained the key pair value from the object
  const navButtons = Object.entries(paths).map(([key, path]) => {
    return `<button id="${path.id}" onclick="ROUTER.load('${key}')">${path.navTitle}</button>`;
  });

  // set navigation
  const navigationContainer = document.querySelector("#navigation");
  navigationContainer.innerHTML = navButtons.join("");
}

load();
