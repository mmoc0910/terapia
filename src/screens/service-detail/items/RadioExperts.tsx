import React from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { TAccount } from "../../../utils";

type Props = { experts: TAccount[] } & UseControllerProps;
export function RadioExperts({ experts, ...props }: Props) {
    console.log('experts ~ ', experts)
  const {
    field,
    fieldState: { error },
  } = useController(props);
  const renderError = () => {
    if (!error) return null;
    return <span className="text-danger">{error.message}</span>;
  };
  return (
    <div style={{ marginBottom: "30px" }}>
      <h3
        className="mb-4"
        style={{ fontSize: "24px", marginBottom: "0px !important" }}
      >
        Chọn chuyên gia
      </h3>
      <div>
        {experts.map((item) => (
          <div class="form-check" key={item._id}>
            <input
              className="form-check-input"
              type="radio"
              id={item._id}
           
              {...field}
              checked={field.value === item._id}   value={item._id}
            />
            <label className="form-check-label" for={item._id}>
              {item.fullName} - {item.email}
            </label>
          </div>
        ))}
      </div>
      {renderError()}
    </div>
  );
}
