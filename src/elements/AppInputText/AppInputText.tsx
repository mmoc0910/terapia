import React from "react";
import { useController, UseControllerProps } from "react-hook-form";

type Props = {
  placeholder: string;
  type: React.HTMLInputTypeAttribute | undefined;
} & UseControllerProps;
export function AppInputText({
  placeholder,
  type = 'text',
  name,
  control,
  rules,
  disabled,
  defaultValue,
  shouldUnregister,
}: Props) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
    disabled,
    rules,
    shouldUnregister,
  });
  const renderError = () => {
    if (!error) return null;
    return <span className="text-danger">{error.message}</span>;
  };
  return (
    <div style={{width: '100%'}}>
      <input
        {...field}
        type={type}
        className="form-control py-3 border-primary bg-transparent"
        placeholder={placeholder}
      />
      {renderError()}
    </div>
  );
}
