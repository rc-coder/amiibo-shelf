interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: boolean;
}

const InputBox = ({ labelText, error, ...props }: Props) => {
  return (
    <div className={props.className}>
      <label
        className={`block text-slate-950  mb-2 text-xs lg:text-sm xl:text-base `}
      >
        {labelText}
      </label>
      <input
        className={`rounded border  shadow-md block w-full px-5 py-2 focus:outline-pink-500 text-pink-600
                ${
                  error ? ' border-red-500 ' : 'border-slate-400 border-double'
                }`}
        {...props}
      ></input>
    </div>
  );
};

export default InputBox;
