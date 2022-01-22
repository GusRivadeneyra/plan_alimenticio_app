import { PATHS } from "./data.js";

class Router {
  constructor(paths) {
    this.paths = paths;
    this.initRouter();
  }

  initRouter() {
    const {
      location: { pathname = "/" },
    } = window;
    const URL = pathname === "/" ? "menu" : pathname.replace("/", "");
    this.load(URL);
  }

  load(page) {
    const { paths } = this;
    console.log(page);
    const { path, htmlContent } = paths[page];

    // change content
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = htmlContent;

    window.history.pushState({}, "done", path);
  }
}

const ROUTER = new Router(PATHS);

window.ROUTER = ROUTER;
