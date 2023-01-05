import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register"; 
import Detail from "./pages/Detail"; 
import User from "./pages/User";
import RegisToko from "./pages/RegisToko";
import EditToko from "./pages/EditToko";
import AddFood from "./pages/AddFood";
import EditFood from "./pages/EditFood";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="main" element={<Main />}/>
        <Route path="main/detail/:id" element={<Detail />} />
        <Route path="/user" element={<User />} />
        <Route path="/registrasi-toko" element={<RegisToko />} />
        <Route path="/edit-toko" element={<EditToko />} />
        <Route path="/add-food" element={<AddFood />} />
        <Route path="/edit-food/:id" element={<EditFood />} />
        <Route path="/edit-user" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;