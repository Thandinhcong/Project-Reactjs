import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import HomePage from "./pages/layout-client/main/home"
import Signin from "./pages/users/Signin"
import Signup from "./pages/users/Signup"
import Contacts from "./pages/layout-client/contacts/Contacts"
import DeltailPage from "./pages/layout-client/main/deltail-product/Deltail-product"
import LayoutAdmin from "./pages/layout-admin/dashbroand"
import NotFound from "./pages/not-found/NotFound"
import UpdateProduct from "./components/admin/products/UpdateProduct"
import AddProduct from "./components/admin/products/AddProduct"
import ListCategorys from "./pages/layout-admin/ListCate"
import Statistical from "./components/admin/statistical/Statistical"
import Favorite from "./pages/layout-client/productslove/productLove"
import LayoutAdminCheck from "./pages/layout-admin/layoutAdmin"
import AddCateries from "./components/admin/categories/AddCateries"

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
          <Route path="chi-tiet-san-pham/:id" element={<DeltailPage />} />
          <Route path="san-pham-yeu-thich" element={<Favorite />} />
        </Route>
        <Route path="admin" element={<LayoutAdminCheck />}>
          <Route index element={<LayoutAdmin />} />
          <Route path="cap-nhat-san-pham/:id" element={< UpdateProduct />} />
          <Route path="them-san-pham" element={<AddProduct />} />
          <Route path="chi-tiet-san-pham" element={<DeltailPage />} />
          <Route path="loai-hang" element={<ListCategorys />} />
          <Route path="them-loai-hang" element={<AddCateries />} />
          <Route path="thong-ke" element={<Statistical />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
