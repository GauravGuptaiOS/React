import React from "react"
import ReactDOM from "react-dom/client"

//ReactElement => JS Object => JS object into a real DOM element
const heading = React.createElement("h1", {id : "heading"}, "This is React")
const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(heading)

// JSX => ReactElement => JS Object => HTML Element(render)

// React Element
const jsxHeading = (
<h1> This is heading using JSX </h1>
)


//Functional Component : A JS function that return some piece of JSX or react element is called functional component
const HeadingComponent = () => <h1> This is react element using functional component</h1>

const HeadingComponent2 = () => {
  return <h1> Heading component with return  </h1>
}

const HeadingComponent3 = () => (
  <h1>This is functional component without explicit return </h1>
)

//Compositional Component
const HeadingComponent4 = () => (
  <div id = "container" >
  <HeadingComponent3/>
  <h2> This is compositional component</h2>
  </div>
)

const title = (
  <div>
     {jsxHeading}
     <h1> This is React Element </h1>
     <h2> This is React Element </h2>
  </div>
  
) 
root.render(title )