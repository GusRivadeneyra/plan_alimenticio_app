import { DATA } from "./data.js";
import { optionsBuilder } from "./builder.js";

class Router {
  constructor(paths) {
    this.paths = paths;
    this.initRouter();
  }

  initRouter() {
    const {
      location: { pathname = "/" },
    } = window;
    const URL = pathname === "/" ? "home" : pathname.replace("/", "");
    console.log(URL);
    this.load(URL);

    console.log(DATA);
  }

  load(page) {
    const { paths } = this;

    const { path, template } = paths[page];
    const $CONTAINER = document.querySelector("#content");
    $CONTAINER.innerHTML = template;
    window.history.pushState({}, "done", path);
  }
}

const optionsHTML = optionsBuilder(DATA.options);

const PATHS = {
  home: {
    path: "/",
    template: optionsHTML,
  },
  menu: {
    path: "/menu",
    template: `<h1>👩🏻‍💻 Menu</h1>`,
  },
};

export const ROUTER = new Router(PATHS);
