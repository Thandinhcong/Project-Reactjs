import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import HomePage from "./pages/layout-client/main/home"
import Signin from "./pages/users/Signin"
import Signup from "./pages/users/Signup"
import Contacts from "./pages/layout-client/contacts/Contacts"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* client */}
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="lien-he" element={<Contacts />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
