function component() {
  const element = document.createElement('div');
  element.innerHTML = 'App';
  return element;
}

document.body.appendChild(component());