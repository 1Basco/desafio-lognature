import { ButtonTypeConstants } from "../../../../app/constants/button-type.constants";
import { translate } from "../../../../configuration/i18n.configuration";

interface PrimaryButtonOptions {
  title?: string;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
  icon?: JSX.Element;
  disabled?: boolean;
  isLoading?: boolean;
}

const PrimaryButton = ({
  title,
  type,
  onClick,
  icon,
  disabled,
}: PrimaryButtonOptions): JSX.Element => (
  <div>
    <button
      type={type || ButtonTypeConstants.SUBMIT}
      className={` group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white 
      ${
        disabled
          ? "bg-gray-400 hover:bg-gray-400"
          : "bg-teal-600 hover:bg-teal-700"
      }
      focus:outline-none`}
      onClick={onClick}
      disabled={disabled}
    >
      <>
        {icon && (
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {icon}
          </span>
        )}

        <h1>{title || translate("common.send")}</h1>
      </>
    </button>
  </div>
);

export default PrimaryButton;
