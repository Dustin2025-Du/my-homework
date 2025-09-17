import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router";
import '@ant-design/v5-patch-for-react-19';
import App from './App.tsx'
import Home from './page/home.tsx'
import store from './store.ts'
const root: any = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
