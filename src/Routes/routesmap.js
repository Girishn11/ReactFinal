import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import { ROUTER } from "./routes";
function AppRoutes() {
  return <RouterProvider router={ROUTER} />;
}
export default AppRoutes;
{
  /* <BrowserRouter>
      <Routes>
        {ROUTER.map(({ path, element }, index) => (
          <Route path={path} element={element} key={path + "_" + index} />
        ))}
      </Routes>
    </BrowserRouter> */
}
