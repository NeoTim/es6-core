import 'bootstrap/js/bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {CustomElement} from 'custom-element';
import appTemplate from 'app.html!text';

export class App {

  title = 'ES6 Core';
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.element = new CustomElement('my-app', appTemplate);
    this.setTitle();
  }

  setTitle() {
    let H1 = this.element.querySelector('#title');
    H1.innerHTML = this.title;
    this.insertNode(this.element);
  }

  insertNode(node) {
    this.rootElement.insertBefore(node, this.rootElement.firstChild);
  }
}
