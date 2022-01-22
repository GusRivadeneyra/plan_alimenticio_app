const paths = window.PATHS;

function load() {
  if (!paths) return;
  const navButtons = Object.entries(paths).map(
    ([key, path]) =>
      `<button id="${path.id}" onclick="ROUTER.load('${key}')">${path.navTitle}</button>`
  );

  // set navigation
  const navigationContainer = document.querySelector("#navigation");
  navigationContainer.innerHTML = navButtons.join("");
}

load();
