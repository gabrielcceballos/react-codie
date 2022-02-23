import {
  useReducer,
  createContext,
  ReactNode,
  useEffect,
  Dispatch,
  useContext,
} from "react";

//intefaces
import { ICart, ICartAction , ICartItem } from "./intefaces/cart";

interface ProvidersProps {
  children: ReactNode;
}

const initialState: ICart = {
  items: [],
};

const storageName = 'storage_cart';

function reducer(state: ICart, action: ICartAction): ICart {
  const payload = action.payload;

  function storeData(value: ICartItem[]) {
    localStorage.setItem(storageName, JSON.stringify(value));
  }

  switch (action.type) {
    case "NewItem":
      const newListCart: ICartItem[] = [payload as ICartItem, ...state.items];

      storeData(newListCart);

      return {
        items: newListCart,
      };
    case "DeleteItem":
      const newCartList = state.items.filter(
        (user: ICartItem) => user.id !== payload
      );

      storeData(newCartList);

      return {
        items: newCartList,
      };
      case "GeItems":
      return {
        items: payload as ICartItem[],
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const CartContext = createContext<
  { state: ICart; dispatch: Dispatch<ICartAction> } | undefined
>(undefined);

function CartProvider({ children }: ProvidersProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const jsonValue = localStorage.getItem(storageName);
    
    const items: ICartItem[] =
      jsonValue && jsonValue.length > 0 ? JSON.parse(jsonValue) : [];

    dispatch({
      type: "GeItems",
      payload: items,
    });
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useUCart() must be used within a CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
