function customRender(reactElement, container) {
    // Create a new DOM element based on the type in the reactElement object
    /*
    const domElement = document.createElement(reactElement.type);

    // Set the inner HTML of the created element to the children of reactElement
    domElement.innerHTML = reactElement.children;

    // Set the attributes from the props of reactElement
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    // Append the created DOM element to the container
    container.appendChild(domElement);
    */
   const domElement = document.createElement
   (reactElement.type)
   domElement.innerHTML = reactElement.children
   for(Object.hasOwnProperty.call(object,prop))
{
    const element = object(prop);
}

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);
