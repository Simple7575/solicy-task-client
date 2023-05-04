import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

// Layouts
import Home from "./layouts/Home";

// Pages
import Accounts from "./pages/accounts/Accounts";
import Account from "./pages/accounts/Account";
import AccountsError from "./pages/accounts/AccountsError";

// Loaders
import { getAccount, getAccounts } from "./loaders/accounts/loader";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home />} errorElement={<AccountsError />}>
            <Route path="/accounts" element={<Accounts />} loader={getAccounts} />
            <Route path="/accounts/:id" element={<Account />} loader={getAccount} />
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
