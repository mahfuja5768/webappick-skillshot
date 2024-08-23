const Button = ({ text, onclick, isOrange }) => {
  return (
    <div className={isOrange && "flex"}>
      {isOrange ? (
        <button
          onClick={onclick}
          className="lg:px-5 px-4 py-2 lg:py-3 my-3 bg-secondary rounded font-medium   duration-300 text-white hover:bg-gradient-to-r hover:bg-secondary/80 text-xs"
        >
          {text}
        </button>
      ) : (
        <button
          onClick={onclick}
          className="lg:px-5 px-4 py-2 lg:py-3 my-3 text-white rounded-md  font-medium   duration-300 bg-primary  hover:bg-secondary text-xs"
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
