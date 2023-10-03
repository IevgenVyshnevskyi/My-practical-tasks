// this line imports the required functions and types from the react-redux library.
// hook useDispatch is used to get (retrieve) the Redux dispatcher,
// hook useSelector is used to get (retrieve) state from the Redux store,
// and TypedUseSelectorHook is the type that will be used for our custom selectors.
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';

// this line imports the RootStateType and AppDispatchType types from the './store' file.
// RootStateType is the type that represents the Redux root state,
// and AppDispatchType is the type for the Redux dispatcher.
import type { AppDispatchType, RootStateType } from './store';

// this line exports a custom useAppDispatch hook that will use the useDispatch function to get a Redux dispatcher of type AppDispatchType.
// this helps ensure typing when using the Redux dispatcher.
export const useAppDispatch = () => useDispatch<AppDispatchType>();

// this line exports a custom selector useAppSelector that will use the useSelector function with type TypedUseSelectorHook<RootState>.
// That is, it suggests that the selector should use the RootState type to correctly obtain the state from the Redux store.
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;