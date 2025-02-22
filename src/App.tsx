import { Route, Routes } from "react-router";
import { Home, Login, Register, ServiceDetail } from "./screens";
import { AuthenLayout, Layout } from "./layouts";
import { Bounce, ToastContainer } from "react-toastify";
import React from "react";
import MyAppointment from "./screens/my-appointment/MyAppointment";
import { ChatBox } from "./components/chat/ChatBox";
import { useAppAccount } from "./utils";
import { ForgotPassword } from "./screens/forgot-password/ForgotPassword";
import { ResetPassword } from "./screens/reset-password/ResetPassword";
import { BlogDetail } from "./screens/blog-detail/BlogDetail";

function App() {
  const { account } = useAppAccount();
  return (
    <React.Fragment>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/book-appointment" element={<Appointment />} /> */}
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/my-appointment" element={<MyAppointment />} />
          <Route path="/blog/:blogId" element={<BlogDetail />} />
        </Route>
        <Route element={<AuthenLayout />}>
          <Route path="/sign-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {account && <ChatBox></ChatBox>}
    </React.Fragment>
  );
}

export default App;
