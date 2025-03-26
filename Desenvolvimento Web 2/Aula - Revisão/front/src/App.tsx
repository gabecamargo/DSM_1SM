import Form from "./components/Form";
import List from "./components/List";
import { ProviderCar } from "./contexts/CtxCar";

export default function App() {
  return (
    <>
      <ProviderCar>
        <Form />
        <List />
      </ProviderCar>
    </>
  );
}