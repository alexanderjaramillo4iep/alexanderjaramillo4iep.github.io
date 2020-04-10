
const fn = {
  translate: (category, text) => {
    category = category.toLowerCase();
    text = text.toLowerCase();
    if (!translate[category]) {
      console.log('categoría no reconocida', {category});
      return text;
    }
  
    if (!translate[category][text]) {
      console.log('texto en categoría no reconocido', {category, text});
      return text;
    }
  
    return translate[category][text];
  },
  createElm: obj => {
    obj = {
      tag: 'span',
      attributes: {innerHTML: 'prueba'},
      ...obj
    };
    const elm = document.createElement(obj.tag);
    for (const attr in obj.attributes) {
      if (obj.attributes.hasOwnProperty(attr)) {
        const val = obj.attributes[attr];
        elm[attr] = val;
      }
    }

    return elm;
  }
};

window.fn = fn;