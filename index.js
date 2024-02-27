function MainContent () {
  return (<h1>I am learning to write React the declarative way</h1>)
}

const navbar = (
  <nav>
    <h1> jammin website</h1>,
    <ul>
      <li>"Pricing"</li>
      <li>"About"</li>
      <li>"Contact"</li>
    </ul>
    </nav>
  
)



ReactDOM.render(
//  <ul>
//  <li>Hello Jamaicans</li>
//  <li>Hello Ameriicans</li>  
//  <li>Hello Canadians</li>
//  </ul>,
//  <MainContent />,
 navbar ,
 document.getElementById('root'))

 //creating something with vanilla javascript the imperative way

 const h1 = document.createElement('h1')
 h1.textContent = 'Hey there..this is the imperative way to programm'
 h1.className = "header"
//  h1.appendChild(div#root)**this was wrong
//get your element(root) and then append what you want to it
document.getElementById('root').append(h1)

