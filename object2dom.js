const ObjectToDOM = (() => {
  const generate = (obj) => {
    const domElement = document.createElement(obj.tag);
    if (obj.content) domElement.innerText = obj.content;
    if (obj.classes) {
      obj.classes.forEach((cssClass) => domElement.classList.add(cssClass));
    }
    if (obj.id) domElement.id = obj.id;
    if (obj.src) domElement.src = obj.src;
    if (obj.placeholder) domElement.placeholder = obj.placeholder;
    if (obj.tag === 'input') {
      // input conditionals below
      if (obj.type) domElement.type = obj.type;
      if (obj.name) domElement.name = obj.name;
      if (obj.value) domElement.value = obj.value;
      if (obj.rows) domElement.rows = obj.rows;
      if (obj.cols) domElement.cols = obj.cols;
      if (obj.selected) domElement.selected = 'true';
      if (obj.required) domElement.required = obj.required;
      if (obj.completed === 1) domElement.checked = 'true';
      if (obj.for) domElement.htmlFor = obj.for;
    }
    if (obj.dataCHANGEME) domElement.setAttribute('data-CHANGEME', obj.dataCHANGEME); // custom condition for any "data-" html attributes
    if (obj.children) {
      obj.children.forEach((child) => {
        const newChild = generate(child);
        domElement.append(newChild);
      });
    }
    return domElement;
  };

  return {
    generate,
  };
})();

export default ObjectToDOM;
