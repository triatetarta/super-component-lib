import React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  customProp: string;
}

export type Ref = HTMLButtonElement;

const Button = React.forwardRef<Ref, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className='bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 text-base'
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
