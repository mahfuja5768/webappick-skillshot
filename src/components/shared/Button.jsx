const Button = ({ center, text, onclick, isOrange, isRounded }) => {
  return (
    <div className={isOrange && "flex"}>
      {isOrange ? (
        <button
          onClick={onclick}
          className="lg:px-5 px-6 py-3 my-3 bg-secondary rounded font-medium   duration-300 text-white hover:bg-gradient-to-r hover:bg-secondary/80"
        >
          {text}
        </button>
      ) : (
        <button
          onClick={onclick}
          className="lg:px-5 px-6 py-3 my-3 text-white rounded-md  font-medium   duration-300 bg-primary  hover:bg-secondary"
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
