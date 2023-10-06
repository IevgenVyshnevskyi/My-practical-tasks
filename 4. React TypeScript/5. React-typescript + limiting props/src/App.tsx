import { IoArrowRedoCircleSharp, IoCheckmarkSharp } from "react-icons/io5";  // where "react-icons/io5" is icons library.

import Button from "./components/Button";

import "./styles.css";


export default function App() {

   return (
      <div className="App">
         <Button primary>Click me</Button>
         <Button secondary>Click me</Button>
         <Button primary arrow>
            Click me
         </Button>
         <Button secondary icon={<IoArrowRedoCircleSharp />}>
            Click me
         </Button>
         <Button secondary icon={<IoCheckmarkSharp />} /* arrow */>
            Click me
         </Button>
      </div>
   );
}

