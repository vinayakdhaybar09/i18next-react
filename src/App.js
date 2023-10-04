import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Currency from "./pages/Currency";
import i18n from "./i18n";
import { Suspense } from "react";
import LocaleContext from "./LocaleContext";

const Loading = () => {
  return <h1>Loading ....</h1>;
};

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <LocaleContext.Provider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/currency" element={<Currency />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </LocaleContext.Provider>
      </Suspense>
    </BrowserRouter>
  );
}
