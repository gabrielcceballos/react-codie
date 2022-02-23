import { Input } from "./styles";
import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

export function InputComponent({ id, name, label, ...rest }: any) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Input>
      <label htmlFor={id} className="paragraph-2-bold-graphie">
        {label}
      </label>

      <input id={id} defaultValue={defaultValue} ref={inputRef} {...rest} className="paragraph-1-bold-graphie" />

      {error && <span className="paragraph-3-bold-graphie">{error}</span>}
    </Input>
  );
}
