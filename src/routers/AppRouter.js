import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Login } from "../pages/Login ";
import { Main } from "../pages/Main";
import { NotFound } from "../pages/NotFound";



export const AppRouter = () => {
    return (
        <> <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}
