import { Routes, Route } from "react-router-dom";
import Layout from "../../components/common/Layout";
import Home from "../pages/Home";
import Popular from "../pages/Popular";
import Battle from "../pages/Battle";
import Results from "../pages/Results";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="battle" element={<Battle />} />
          <Route path="battle/results" element={<Results />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default Router;
