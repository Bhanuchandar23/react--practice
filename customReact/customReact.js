 function CustomRender(reactElement,Container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
      if(prop ==='children') continue
      domElement.setAttribute(prop,reactElement.props[prop])
 }
 Container.appendChild(domElement)
}




const reactElement  = {
    type:'a',
    Props: {
        href:"https://google.com",
        target: '_blank',
    },
    children: "Click me hear run google"

}
const Container = document.querySelector('#root')
CustomRender(reactElement,Container)
