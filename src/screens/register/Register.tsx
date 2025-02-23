import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { AppInputText } from "../../elements";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FetchApi } from "../../utils/FetchApi/FetchApi";
import { useAppAccount } from "../../utils";

export function Register() {
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

  const onSubmit = async (data: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    try {
      const res = await FetchApi.register(data);
      setAccount(res);
      toast.success("Đăng ký tài khoản thành công !");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };
  if (account) return;
  return (
    <React.Fragment>
      <h1 className="display-5 mb-4">Đăng ký</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row gy-3 gx-4">
          <div className="col-xl-12">
            <AppInputText
              name="fullName"
              control={control}
              rules={{
                required: { value: true, message: "Không được để trống" },
              }}
              placeholder="Họ và tên"
            />
          </div>
          <div className="col-xl-12">
            <AppInputText
              name="email"
              control={control}
              rules={{
                required: { value: true, message: "Không được để trống" },
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
                required: { value: true, message: "Không được để trống" },
              }}
              type="password"
              placeholder="Mật khẩu"
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary text-white w-100 py-3 px-5"
            >
              ĐĂNG KÝ
            </button>
          </div>
          <div>
            <p style={{ textAlign: "center" }}>
              Bạn đã có tài khoản?{" "}
              <Link
                to={"/sign-in"}
                style={{ fontWeight: "bold" }}
                className="text-primary"
              >
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
