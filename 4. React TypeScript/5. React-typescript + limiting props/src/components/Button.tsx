import cn from "classnames";  // is used to import library or module classnames in your JavaScript or TypeScript file.
import {ReactNode} from "react";
import { IoChevronForwardOutline } from "react-icons/io5"; 

type CommonButtonProps = {
   children: string,
   disabled?: boolean,
};

type PrimaryButtonProps = CommonButtonProps & {
   primary: boolean,
   arrow?: boolean,  // with this entry we may or may not use props 'arrow'.
   secondary?: never,  // this entry prohibits the use of 'secondary' props.
   icon?: never,  // this entry prohibits the use of 'icon' props.
};

type SecondaryButtonProps = CommonButtonProps & {
   secondary: boolean,
   icon?: ReactNode,  // with this entry we may or may not use props 'icon'.
   primary?: never,  // this entry prohibits the use of props 'primary'.
   arrow?: never,  // with this entry we prohibit the use of props 'arrow'.
};

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps;

const Button = ({children, arrow, icon, primary, secondary, disabled}: ButtonProps) => {
   const classes = cn({primary, secondary});

   return (
      <button className={classes} disabled={disabled}>
         {icon}
         <span>{children}</span>
         {arrow && <IoChevronForwardOutline />}
      </button>
   )
}

export default Button;