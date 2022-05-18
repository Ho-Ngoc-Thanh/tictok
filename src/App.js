import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouters, praviteRouters } from "~/routers";
import LayoutDefault from "./component/Layout/DefaultLayout";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouters.map((router, index) => {
            const Page = router.component;
            let Layout = LayoutDefault;
            if (router.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={router.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
