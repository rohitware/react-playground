import JSXBasics from "./jsx-basic/JSXBasics";
import JSXBasics2 from "./jsx-basic/JSXBasics2";
import Greeting from "./component-props/Greeting";
import Card from "./component-props/Card";
import Parent from "./component-props/Parent";

function App() {
  return (
    <div>
      {/* <JSXBasics /> */}
      {/* <JSXBasics2 /> */}
      {/* <Greeting /> */}
      <Card title="React" text="A JS library for building UIs" />
      <Card title="JavaScript" text="The language of the web" />
      <Card title="HTML" text="Structure of a webpage" />

      <Parent />
    </div>
  );
}

export default App;
