const NormalForm = (props) => {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <label htmlFor="username" className="text-sm font-medium py-1">
          {props.label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500"
          id="username"
          type="text"
          placeholder={props.placeholder}
          onChange={props.onChange}
          defaultValue={props.defaultValue}
        ></input>
      </div>
    </div>
  );
};

export default NormalForm;
