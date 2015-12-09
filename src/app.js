import 'bootstrap/js/bootstrap';
import 'bootstrap/css/bootstrap.css!';
import appTemplate from 'app.html!text';

function templateContent(str) {
  let fragment;
  let template;
  let content;

  fragment = document.createElement('div');
  fragment.innerHTML = str;
  template = fragment.firstChild;
  fragment.remove();
  content  = document.importNode(template.content, true);
  return content;
}

export class App {

  title = 'ES6 Core';
  constructor(rootElement) {
    this.element = rootElement;
    this.setTitle();
  }

  setTitle() {
    let content = templateContent(appTemplate);
    let H1      = content.querySelector('#title');

    H1.innerHTML = this.title;
    this.insertNode(content);
  }

  insertNode(node) {
    this.element.insertBefore(node, this.element.firstChild);
  }
}
