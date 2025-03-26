import { forwardRef, ReactNode } from "react";
interface IAppHandleInputProps {
  label: ReactNode
}
const ApphandleInput = forwardRef<HTMLInputElement, IAppHandleInputProps>(
  ({
    label
  }) => {
    return (
      <div className="flex flex-col gap-2">
        {label && <label
        
        >{label}</label>}
      </div>
    )
  }
);
ApphandleInput.displayName = "AppHandleInput"
export default ApphandleInput