import cn from "classnames";  // is used to import library or module classnames in your JavaScript or TypeScript file.
import { ComponentProps, ElementType } from "react";
//import { IoChevronForwardOutline } from "react-icons/io5";
//console.log('ComponentProps: ', ComponentProps);

type ButtonOwnProps<E extends ElementType = ElementType> = {  // where 'ElementType' is special type representing by React. If we get nothing in 'ElementType', we leave '= ElementType' ('ElementType' the same as'html' teg).
   children: string,
   primary?: boolean,
   secondary?: boolean,
   as?: E,  // other variant 'a' | 'button',
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentProps<E>, keyof ButtonOwnProps>;
// where 'ComponentProps' is special type which is represented by React, that includes all possible type of props.
// using where 'Omit<ComponentProps<E>, keyof ButtonOwnProps>' we discard from this props all those types that we have already called ButtonOwnProps.


const defaultElement = 'button';

export default function Button<E extends ElementType = typeof defaultElement>({
   children,
   primary,
   secondary,
   as,
   ...otherProps
}: ButtonProps<E>) {
   const classes = cn({primary, secondary});
   const TagName = as || defaultElement;

   return (
      <TagName className={classes} {...otherProps}>
         {children}
      </TagName>
   )
}

//export default Button;

/* type CommonButtonProps = {
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

export default Button; */