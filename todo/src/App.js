import { Route, Routes } from "react-router-dom";
import Counter from "./features/counter/Counter";
import NextPage from "./pages/NextPage";

const App = () => {
  return (
    <Routes>
      <Route path="/counter" element={<Counter />} />
      <Route path="/nextpage" element={<NextPage />} />
    </Routes>
  );
};

export default App;
