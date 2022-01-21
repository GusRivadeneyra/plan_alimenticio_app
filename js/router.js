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
  }

  load(page) {
    const { paths } = this;

    const { path, template } = paths[page];
    const $CONTAINER = document.querySelector("#content");
    $CONTAINER.innerHTML = template;
    window.history.pushState({}, "done", path);
  }
}
