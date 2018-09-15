export default class Router {
  constructor(rootRoute, outlet, components) {
    this.outlet = outlet;
    this.components = components;
    this.rootRoute = rootRoute;

    document.addEventListener('DOMContentLoaded', () => {
      location.hash = rootRoute;
      this.route();
    });

    window.addEventListener('hashchange', this.route.bind(this));
  }

  route() {
    const currentRoute = location.hash.substring(1, location.hash.length);

    if (this.components[currentRoute]) {
      document.querySelector(this.outlet).innerHTML = this.components[
        currentRoute
      ].template();
    } else {
      document.querySelector(this.outlet).innerHTML = `<h1>Page not found!`;
    }
  }
}
