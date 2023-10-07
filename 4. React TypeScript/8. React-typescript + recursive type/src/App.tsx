// type NestedNumber = NestedNumber;  // This string is invalid and is intended to demonstrate an incorrect type declaration. It tries to create a NestedNumber type that refers to itself, which is incorrect.


// This line declares a NestedNumber type, which can be either a NestedNumber[] array or a number.
// This allows you to create nested data structures where each element can be either a number or an array of numbers.
type NestedNumber = NestedNumber[] | number;


// This line creates a numbers variable that is of type NestedNumber.
// In this case, numbers is an array of numbers and nested arrays of numbers.
const numbers: NestedNumber = [1, 3, [12, [3, 4]]];


// This line declares the JSONPrimitive type, which represents the simple values ​​that can be contained in JSON structures.
// These values ​​include string, number, boolean, and null.
type JSONPrimitive = string | number | boolean | null;


// This string defines the JSONObject type, which is a JSON-like object with properties that have string keys and values ​​of type JSONValue.
// The properties of this object can be of any string key and have values ​​that match the types declared in JSONValue.
type JSONObject = {
   [k: string]: JSONValue;
}


// This string defines the JSONArray type, which is a JSON-like array where each element of the array is of type JSONValue.
type JSONArray = JSONValue[];


// This string defines the JSONValue type, which can be either a primitive JSON value (JSONPrimitive), a JSON-like object (JSONObject), or a JSON-like array (JSONArray).
type JSONValue = JSONPrimitive | JSONObject| JSONArray;


// is a generic type that takes type T and uses mapped type to create a new type where all properties of T are made mandatory and all their values ​​are also processed again using NonNullable.
// This is used to strip type T of all possible nulls and undefineds.
type NonNullableQuery<T> = {
   [Prop in keyof T]-?: NonNullableQuery<NonNullable<T[Prop]>>
}

// ДОПРАЦЮВАТИ (УТОЧНИТИ ЩОДО "GetMenuQuery")!!!
// is a type that represents the data structure of a GraphQL query.
// In this code it is defined as "any", in a real project this type should be defined based on the data structure you receive from the GraphQL server.
type GetMenuQuery = any;


// is the type defined as the result of applying the NonNullableQuery type to the GetMenuQuery type.
// This type represents the data structure for receiving the label.
type MenuLable = NonNullableQuery<GetMenuQuery>['menu']['menuItems']['nodes'][0]['label'];


// this is another way to get the "label" type from the GetMenuQuery type structure.
// In this case, a nested approach is used, where the GetMenuQuery type is processed sequentially to remove null and undefined at each level.
type NaiveMenuLabel = NonNullable<
   NonNullable<
      NonNullable<
         NonNullable<
            NonNullable<
               NonNullable<
                  GetMenuQuery>['menu']
            >['menuItems']
         >['nodes']
      >[0]
   >['label']>


export const App = () => {
      return <div/>
   }

export default App;
