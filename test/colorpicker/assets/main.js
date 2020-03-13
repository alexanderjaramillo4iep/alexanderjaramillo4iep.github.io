const custom_fn = {
  setColor: () => {
    // const hex = $('#hex').val();
    // const rgba = $('#rgba').val();
    const hsla = $('#hsla').val();
    const [matiz, saturacion, luminosidad, transparencia] = hsla.split('(')[1].split(',');
    return { matiz, saturacion, luminosidad, transparencia };
  },
  sugestColor: () => {
    const color = custom_fn.setColor();
    let quantity = parseInt($('#quantity').val());
    const range = 360 / quantity;
    const colors = [];
    let colorM = parseInt(color.matiz);
    while (quantity > 0) {
      if ((colorM + range) > 360) {
        colorM -= 360;
      } else {
        colorM += range;
        const newColor = { ...color };
        newColor.matiz = colorM + "";
        colors.push(newColor);
        quantity--;
      }
    }
    console.log(colors);
    custom_fn.selectedColors(colors.map(color => `hsl(${color.matiz}, ${color.saturacion}, ${color.luminosidad})`));
  },
  selectedColors: (colors) => {
    let color;
    let results = $('#results');
    results.html('');
    for (const c of colors) {
      color = w3color(c);
      $(`<li class="list-group-item flex-grow-1 w-25"
      style="background-color: ${c}; color: hsl(${color.hue < 180 ? (color.hue + 180) : (color.hue - 180)}, ${color.sat * 100}%, ${color.lightness * 100}%)">
      <div class="color sintax" >${color.toHexString()}</div>
      <div class="color sintax" >${custom_fn.objToRgb(color.toRgb())}</div>
      <div class="color sintax" >${custom_fn.objToHsl(color.toHsl())}</div>
      </li>`).appendTo(results);
    }
  },
  convert: (data) => {
    const hex = data.value;
    const allValues = w3color(hex);
    const hsl = allValues.toHsl();
    const rgb = allValues.toRgb();

    custom_fn.selected = { hex, hsl, rgb };

    $('#hex').val(hex);
    $('#hsla').val(custom_fn.objToHsl(hsl));
    $('#rgba').val(custom_fn.objToRgb(rgb));

    custom_fn.sugestColor();

  },
  objToHsl: (hsl) => `hsla(${hsl.h}, ${hsl.s * 100}%, ${hsl.l * 100}%, ${hsl.a})`,
  objToRgb: (rgb) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`,
};

custom_fn.convert({ value: $('#pickedColor').val() })