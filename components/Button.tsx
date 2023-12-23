import Image from "next/image";
import React from "react";

type buttonDetail = {
  type: "button" | "submit";
  label: string;
  title: string;
  icon?: string;
  variant: string;
};

function Button({ type, label, variant, icon, title }: buttonDetail) {
  return (
    <button
      className={`flex items-center justify-center gap-3 rounded-full cursor-pointer ${variant} sdee `}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="cursor-pointer font-bold whitespace-nowrap gap-2">
        {" "}
        {label}
      </label>
    </button>
  );
}

export default Button;
