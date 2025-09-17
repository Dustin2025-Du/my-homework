import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router";
import '@ant-design/v5-patch-for-react-19';
import Home from './page/home.tsx'
import store from './store.ts'
import './index.css'
import List from './page/list.tsx'
import Edit from './page/edit.tsx'
import Add from './page/add.tsx'
import Detail from './page/detail.tsx'
import NavBar from './page/nav.tsx'
import Login from './page/login.tsx'
const root : HTMLElement | null = document.getElementById("root");
if(root){
    ReactDOM.createRoot(root).render(
        <Provider store={store}>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
            </BrowserRouter>
        </Provider>,
    );
}

