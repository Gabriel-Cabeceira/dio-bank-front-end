import { Routes, Route } from "react-router-dom";
import { FormLogin } from "../pages/public/login/Login";
import { Home } from "../pages/private/home/Home";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContexts";

export const MainRoutes = () => {

    const { isLoggedIn } = useContext(AppContext);

    return(
        <Routes>
            {/* Public Routes */}
            <Route path='/' element={<FormLogin />}/>

            {/* Private Routes */}
            <Route path='/home/:id' element={isLoggedIn ? <Home /> : <FormLogin />}/>
      </Routes>
    )
}