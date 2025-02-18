import React, { useEffect } from "react";
import { AppInputText } from "../../elements";
import { FetchApi } from "../../utils/FetchApi/FetchApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useAppAccount } from "../../utils";

export function ResetPassword() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");

  console.log(token); // In ra giá trị token
  const navigate = useNavigate();
  const { account } = useAppAccount();
  const { control, handleSubmit } = useForm();
  console.log("account ~~ ", account);
  useEffect(() => {
    const result = () => {
      if (!account) return;
      navigate("/");
    };
    result();
  }, [account]);

  const onSubmit = async (data: { newPassword: string}) => {
    try {
        const res = await FetchApi.resetPassword({...data, resetToken: token});
        
        toast.success(res?.message);
        navigate('/sign-in')
    } catch (error) {
      toast.error((error as Error).message);
    }
  };
  if (account) return;
  return (
    <React.Fragment>
      <h1 className="display-5 mb-4">Quên mật khẩu</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row gy-3 gx-4">
          <div className="col-xl-12">
            <AppInputText
              name="newPassword"
              control={control}
              rules={{
                required: { value: true, message: "This field is required" },
              }}
              placeholder="New Password"
              type="password"
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary text-white w-100 py-3 px-5"
            >
              SEND
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
