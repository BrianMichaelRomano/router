import Router from './Router/Router.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

const routes = {
  home: new Home(),
  about: new About(),
  contact: new Contact()
};

const router = new Router('home', '#app', routes);
