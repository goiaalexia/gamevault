import React, {createContext, useContext, useState} from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./Store";
import Games from "./pages/Games";
import Login from "./pages/Login"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import {UserLogin} from "./models/videogame";


function App() {

    const LoginContext = createContext<UserLogin>({username: "", password:""});
    const LoginMode = useContext(LoginContext);
    const [userLogin, setUserLogin] = useState(LoginMode)

    const handleUserLogin = (u : UserLogin) => {
        setUserLogin(u);
    }


    console.log(userLogin)
    return (
        <Provider store={store}>
            <LoginContext.Provider value={userLogin}>
                {JSON.stringify(userLogin) !== JSON.stringify({username:'', password:''}) ?
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Games username={userLogin.username} password={userLogin.password}/>}/>
                            <Route path="/wishlist" element={<Wishlist username={userLogin.username} password={userLogin.password}/>}/>
                        </Routes>
                    </BrowserRouter> :
                    <Login setUserLoginCallback={(userData) => handleUserLogin(userData)}></Login>}
            </LoginContext.Provider>
        </Provider>

    );
}

export default App;
