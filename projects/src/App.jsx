import React, { useEffect, useState } from 'react';

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import HomePage from "./pages/layout-client/main/home"

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
import InfoUser from "./components/client/users/infoUser"
import ListMember from "./components/admin/member/listMember"
import UpdateCate from "./components/admin/categories/UpdateCate"
import UpdateInfoUser from "./components/client/users/Update/updateUser"
import Signin from "./pages/users/signin/Signin"
import ForgotPassword from "./pages/users/ForgotPassword"
import SignupPage from "./pages/users/signup/Signup"
import Loading from './loading/nextPage';
import Cart from './pages/layout-client/main/card';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* customer */}
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="signin" element={<Signin />} />
          <Route path="dang-ki" element={<SignupPage />} />
          <Route path="quen-mat-khau" element={<ForgotPassword />} />
          <Route path="lien-he" element={<Contacts />} />
          <Route path="chi-tiet-san-pham/:id" element={<DeltailPage />} />
          <Route path="san-pham-yeu-thich" element={<Favorite />} />
          <Route path="thong-tin-nguoi-dung" element={<InfoUser />} />
          <Route path="cap-nhat-thong-tin-nguoi-dung/:id" element={<UpdateInfoUser />} />
          <Route path="loading" element={<Loading />} />
          <Route path='gio-hang' element={<Cart />} />
        </Route>
        {/* admin */}
        <Route path="admin" element={<LayoutAdminCheck />}>
          <Route index element={<LayoutAdmin />} />
          <Route path="cap-nhat-san-pham/:id" element={< UpdateProduct />} />
          <Route path="them-san-pham" element={<AddProduct />} />
          <Route path="chi-tiet-san-pham" element={<DeltailPage />} />
          <Route path="loai-hang" element={<ListCategorys />} />
          <Route path="them-loai-hang" element={<AddCateries />} />
          <Route path="cap-nhat-loai-hang/:id" element={<UpdateCate />} />
          <Route path="tai-khoan" element={<ListMember />} />
          <Route path="thong-ke" element={<Statistical />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
