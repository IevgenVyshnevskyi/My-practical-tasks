// This code represents a TypeScript component for working with text content,
// which can be displayed as an element of the specified type (by default <div>)
// with the ability to set the type of the element and transfer additional properties to this element.


// It imports two types from the React library.
// ComponentProps is the type to get all the properties of the component,
// and ElementType is the type that represents the HTML element or React component.
import { ComponentProps, ElementType } from "react";


// Declare a TextOwnProps type that accepts an element type of E, which defaults to ElementType.
// This type has two properties: children, which takes a string (the textual content),
// and 'as' , which can be an element of type E (HTML element or a React component) that will display the text.
type TextOwnProps<E extends ElementType = ElementType> = {
   children: string;
   as?: E;
};


// A declaration of type TextProps, which inherits from TextOwnProps.
// It also includes additional properties that can be passed to the Text component using Omit<ComponentProps<E>, keyof TextOwnProps>.
// This means that all ComponentProps<E> ​​properties, except those already defined in TextOwnProps, will be available to the Text component.
type TextProps<E extends ElementType> = TextOwnProps<E> & Omit<ComponentProps<E>, keyof TextOwnProps>;


// Set the default value for the type of element that will surround the text. In this case, the default is <div>.
const defaultElement = "div";


// Declaration of the functional component Text.
// This component accepts an E element type, which defaults to the defaultElement type (which is a <div>).
// The function accepts a properties object of type TextProps<E>,
// where E is the element type, children is the text content, as is the element type that will display the text,
// and otherProps are all additional properties that can be passed to the component.
export default function Text<E extends ElementType = typeof defaultElement>({
   children,
   as,
   ...otherProps
}: TextProps<E>) {
// Defining a TagName variable that represents the type of element to display the text.
// It takes the value of as if passed, or the value of defaultElement if as is not specified.
   const TagName = as || defaultElement;


// Using TagName as the type of element to display text,
// where otherProps are additional properties that can be passed to the element,
// and children are the textual content that will be displayed inside the element.
   return <TagName {...otherProps}>{children}</TagName>;
}
