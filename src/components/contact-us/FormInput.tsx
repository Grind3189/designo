import errorIc from "../../assets/contact/icon-error.svg";

interface FormInputProp {
  inputName: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEmpty: boolean;
}

const FormInput = ({
  inputName,
  value,
  handleChange,
  isEmpty,
}: FormInputProp) => {
  return (
    <div className="flex items-center justify-between border-b border-b-[#fff] px-[14px] py-[11px] focus-within:border-b-2">
      <input
        type="text"
        placeholder={inputName === "email" ? "Email Address" : inputName}
        className={`${
          isEmpty ? "w-[65%]" : "w-full"
        } bg-transparent text-inherit outline-none placeholder:capitalize placeholder:text-white-200`}
        onChange={handleChange}
        name={inputName}
        value={value}
      />
      {isEmpty && (
        <div className="flex w-[35%] items-center justify-end gap-[9px]">
          <span className="text-[12px] max-md:hidden">Can't be empty</span>
          <img src={errorIc} alt="exclamation point icon" />
        </div>
      )}
    </div>
  );
};

export default FormInput;
