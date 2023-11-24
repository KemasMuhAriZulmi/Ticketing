const ButtonRegister = (props) => {
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full"
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  );
};

export default ButtonRegister;
