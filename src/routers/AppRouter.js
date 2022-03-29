import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Checkout } from "../pages/Checkout";
import { CreateNewPass } from "../pages/CreateNewPass";
import { EditAccount } from "../pages/EditAccount";
import { EmailSent } from "../pages/EmailSent";
import { Login } from "../pages/Login ";
import { Main } from "../pages/Main";
import { NotFound } from "../pages/NotFound";
import { OrderHistory } from "../pages/OrderHistory";
import { PassRecovery } from "../pages/PassRecovery";
import { SignUp } from "../pages/SignUp";

export const AppRouter = () => {
    return (
        <> <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />

                <Route path="login" element={<Login />} />

                <Route path="pass-recovery" element={<PassRecovery />} />
                <Route path="email-sent" element={<EmailSent />} />
                <Route path="new-password" element={<CreateNewPass />} />
                <Route path="edit-account" element={<EditAccount />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="order-history" element={<OrderHistory />} />

                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
        </>
    )
}
