import { Route, Routes } from "react-router-dom";
import NextPage from "./pages/NextPage";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/nextpage" element={<NextPage />} />
    </Routes>
  );
};

export default App;
