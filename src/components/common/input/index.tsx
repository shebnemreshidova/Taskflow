import { forwardRef } from "react";


interface AppHandleInputProps {
  label?: string;
  name: string;
  control: any;
  required: boolean;
  inputType: string;
  placeholder: string
  helperText: string
  parentClassname?: string;
  labelClassname?: string;
  inputClassname?: string;
}
const AppHandleInput = forwardRef<HTMLInputElement, AppHandleInputProps>((

) => {
  return (
    <div>
      <label htmlFor=""></label>
      <input type="" />
    </div>
  )
}
)
AppHandleInput.displayName = "AppHandleInput";
export default AppHandleInput