import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
// import Account from "./pages/Account";
// import Users from "./pages/Users";
// import Settings from "./pages/Settings";
// import Bookings from "./pages/Bookings";
// import Login from "./pages/Login";
import Cabins from "./pages/Cabins";
import PageNotFound from "./pages/PageNotFound";
import Applayout from "./ui/Applayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 0,
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route index element={<Navigate replace to={"dashboard"} />} />
            <Route path="dashboard" element={<Dashboard />} />
            {/* <Route path="users" element={<Users />} /> */}
            {/* <Route path="settings" element={<Settings />} /> */}
            <Route path="cabins" element={<Cabins />} />
            {/* <Route path="bookings" element={<Bookings />} />
            <Route path="/account" element={<Account />} /> */}
          </Route>

          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
            padding: "16px 36px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
