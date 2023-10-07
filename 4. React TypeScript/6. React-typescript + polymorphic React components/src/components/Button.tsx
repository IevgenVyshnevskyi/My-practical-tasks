import cn from "classnames";  // is used to import library or module classnames in your JavaScript or TypeScript file.
import { ComponentProps, ElementType } from "react";


type ButtonOwnProps<E extends ElementType = ElementType> = {  //  where 'E' is abbreviation (short) for 'element', and 'ElementType' is special type representing by React. If we get nothing in 'ElementType', we leave '= ElementType' (type 'ElementType' is the same type, as'html' teg type).
   children: string,
   primary?: boolean,
   secondary?: boolean,
   as?: E,  // other variant 'a' | 'button', and it can be any other 'html' teg (like <div> as 'div', <h2> as 'h2', etc.).
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentProps<E>, keyof ButtonOwnProps>;
// where 'ComponentProps' is special type which is represented by React, that includes all possible type of props for the certain (specific) element/component.
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
