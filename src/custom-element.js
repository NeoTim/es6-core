

export class CustomElement {

  constructor(tagName, template) {
    let RegisteredElement = document.registerElement(tagName);
    let element = new RegisteredElement();
    this.compile(template, element);
    return element;
  }

  compile(template, element) {
    if (typeof template === 'string') {
      template = toDomNode(template);
    }

    element.style.display = 'block';
    Array.prototype.forEach.call(template.attributes, (attr, key)=> {
      element.setAttribute(attr.localName, attr.nodeValue);
    });
    let content = document.importNode(template.content, true);
    element.appendChild(content);
  }
}


function toDomNode(string) {
  let div;
  let template;

  div = document.createElement('div');
  div.innerHTML = string;
  template = div.firstChild;
  div.remove();
  return template;
}
