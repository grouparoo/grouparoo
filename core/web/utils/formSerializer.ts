// for is an HTML dom node
function FormSerializer(form) {
  const data: {
    [key: string]: any;
  } = {};
  for (const i in form.elements) {
    const key = form.elements[i].id;

    let value;
    switch (form.elements[i].type) {
      case "checkbox":
        value = form.elements[i].checked;
        break;
      case "file":
        value = form.elements[i].files[0];
        break;
      default:
        value = form.elements[i].value;
    }

    if (key === undefined || key === null || key === "") {
      continue;
    }
    data[key] = value;
  }

  return data;
}

export default FormSerializer;
