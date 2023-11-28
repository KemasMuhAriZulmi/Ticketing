const MiniForm = (props) => {
  return (
    <div
      className="w-full flex"
      style={{ justifyContent: `${props.position}` }}
    >
      <div className="flex flex-col w-11/12">
        <label htmlFor="username" className="text-sm font-medium py-1">
          {props.label + "*"}
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500"
          id="username"
          type="text"
          placeholder={props.label}
          onChange={props.onChange}
          defaultValue={props.defaultValue}
        />
      </div>
    </div>
  );
};

export default MiniForm;
