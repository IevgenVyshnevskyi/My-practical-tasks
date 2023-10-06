import { FC, ReactNode, ReactElement } from "react";


type BoxProps = {
   className?: string,
   children: ReactNode,  // in this case, there can be any number of child ("children") elements.
}

const Box = ({children, className}: BoxProps) => {
   return(
      <div
         style={{padding: '20px', border: '1px solid peru'}}
         className={className}
      >
         {children}
      </div>
   )
}


interface ButtonProps {
   children: string,  // in this case, there can be only "children" element with string type.
}

const Button = ({children}: ButtonProps) => {
   return (
      <button>
         {children}
      </button>
   )
}


interface HomePageProps {
   title: string,  // in this case, there can be only "props" element - "title" with "string" type (not "children" element).
}

const HomePage: FC<HomePageProps> = ({title}) => {
   return (
      <Box className="App">
         <h1>React Children with TypeScript</h1>
         <Button>Button1</Button>
         <Button>Button2</Button>
         <Button>Button3</Button>
         <h2 style={{color: 'orange'}}><b>{title}</b></h2>
         <CentreBox>
            <Button>Button4</Button>
            {/* <Button>Button5</Button> // not a valid entry. Only one child element can be passed. */}
            {/* <div>  // such an entry is allowed if several child elements are wrapped in they parent element.
               <h1>React Children with TypeScript</h1>
               <Button>Button1</Button>
            </div> */}
         </CentreBox>
      </Box>
   )
}


interface CentreBoxProps {
   children: ReactElement,  // (or 'jsx.element') is used instead (замість) of 'ReactChild' (is deprecated), makes a restriction (обмеження), namely: passes only one child element (сhild), or several child elements that are wrapped in they parent element.
}

const CentreBox = ({children}: CentreBoxProps) => {
   return (
      <div
         style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            border: '3px solid green'
         }}
      >
      {children}
   </div>
   )
}


export default function App() {

   return (
      <Box className="App">
         <h1>React Children with TypeScript</h1>
         <Button>Button1</Button>
         <Button>Button2</Button>
         <Button>Button3</Button>
         <CentreBox>
            <Button>Button4</Button>
            {/* <Button>Button5</Button> // not a valid entry. Only one child element can be passed. */}
            {/* <div>  // such an entry is allowed if several child elements are wrapped in that parent element.
               <h1>React Children with TypeScript</h1>
               <Button>Button1</Button>
            </div> */}
         </CentreBox>
         <HomePage title='homepage'/>
         {/* <HomePage title='HomePage'>JHGJGKJGHK</HomePage> */}
      </Box>
   );
}

