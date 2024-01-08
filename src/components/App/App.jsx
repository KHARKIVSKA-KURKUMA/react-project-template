import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import AnotherPage from "components/AnotherPage/AnotherPage";
import Layout from "components/Layout/Layout";
import Home from "components/Home/Home";

export const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="example" element={<AnotherPage />} />
        </Route>
      </Routes>
    </>
  );
};
