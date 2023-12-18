function component() {
    const element = document.createElement('div');
    element.innerHTML = 111;
    return element;
}

document.body.appendChild(component());