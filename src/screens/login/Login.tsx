import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAppAccount } from "../../utils";
import { useForm } from "react-hook-form";
import { AppInputText } from "../../elements";
import { FetchApi } from "../../utils/FetchApi/FetchApi";

export function Login() {
  const navigate = useNavigate();
  const { account, setAccount } = useAppAccount();
  const { control, handleSubmit } = useForm();
  console.log("account ~~ ", account);
  useEffect(() => {
    const result = () => {
      if (!account) return;
      navigate("/");
    };
    result();
  }, [account]);

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const res = await FetchApi.login(data);
      setAccount(res);
      toast.success("Đăng nhập tài khoản thành công !");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };
  if (account) return;
  return (
    <React.Fragment>
      <h1 className="display-5 mb-4">Sign in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row gy-3 gx-4">
          <div className="col-xl-12">
            <AppInputText
              name="email"
              control={control}
              rules={{
                required: { value: true, message: "This field is required" },
              }}
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="col-xl-12">
            <AppInputText
              name="password"
              control={control}
              rules={{
                required: { value: true, message: "This field is required" },
              }}
              type="password"
              placeholder="Password"
            /><Link to={'/forgot-password'} style={{textAlign: 'right', marginBottom: '0px'}}>Quên mật khẩu?</Link>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary text-white w-100 py-3 px-5"
            >
              SIGN IN
            </button>
          </div>
          <div>
            <p style={{ textAlign: "center" }}>
              Bạn chưa có tài khoản?{" "}
              <Link
                to={"/register"}
                style={{ fontWeight: "bold" }}
                className="text-primary"
              >
                Đăng ký
              </Link>
            </p>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
