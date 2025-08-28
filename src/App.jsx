import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
const Table = lazy(() => import("./components/Table"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              width: "100%",
              height: "92vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: '"Gill Sans", sans-serif',
                fontWeight: "bold",
              }}
            >
              Table loading...
            </p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Table />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
