
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import { store } from "./store/root";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

