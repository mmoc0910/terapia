import React, { useEffect } from "react";
import { AppInputText } from "../../elements";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useAppAccount } from "../../utils";
import { useForm } from "react-hook-form";
import { FetchApi } from "../../utils/FetchApi/FetchApi";

export function ForgotPassword() {
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

  const onSubmit = async (data: { email: string }) => {
    try {
      const res = await FetchApi.forgotPassword(data);

      toast.success(res?.message);
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
              name="email"
              control={control}
              rules={{
                required: { value: true, message: "This field is required" },
              }}
              placeholder="Email"
              type="email"
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
