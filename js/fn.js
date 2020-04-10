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
  }
};