import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import HomePage from "./pages/layout-client/main/home"
import Signin from "./pages/users/Signin"
import Signup from "./pages/users/Signup"
import Contacts from "./pages/layout-client/contacts/Contacts"
import DeltailPage from "./pages/layout-client/main/deltail-product/Deltail-product"
import LayoutAdmin from "./pages/layout-admin/dashbroand"
import NotFound from "./pages/not-found/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* client */}
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="signin" element={<Signin />} />
          <Route path="dang-ki" element={<Signup />} />
          <Route path="lien-he" element={<Contacts />} />
          <Route path="chi-tiet-san-pham" element={<DeltailPage />} />
        </Route>
        <Route path="admin" element={<Outlet />}>
          <Route index element={<LayoutAdmin />} />
          {/* <Route path="dang-ki" element={<Signup />} />
          <Route path="lien-he" element={<Contacts />} />
          <Route path="chi-tiet-san-pham" element={<DeltailPage />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
