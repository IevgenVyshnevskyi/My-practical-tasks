import Text from "./components/Text";
import Button from "./components/Button";
import "./styles.css";

export default function App() {
   return (
      <div className="App">
         <Text as="h1">Hello CodeSandbox</Text>
         <Text as="label" htmlFor="id">
            Start editing to see some magic happen!
         </Text>
      <div>
         {/*  if we use " as='a' " in this component, then this component will behave like an <a> tag and we can specify props inherent in the <a> tag. */}
         <Button primary as="a" href="/" target="_blank">
            Click me
         </Button>
         {/* if we do not use " as='...' " in this component at all, then this component will behave as a <button> tag by default, because in the 'Button.tsx' component it is specified: 'const defaultElement = 'button' */}
         <Button secondary type="button" disabled>
            Click me
         </Button>
      </div>
      </div>
   );
}
