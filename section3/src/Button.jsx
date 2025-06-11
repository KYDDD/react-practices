const handleEvent = (name, e) => {
  console.log(name, e.clientX, e.clientY, e.shiftKey);
};

const Button = ({ name }) => <button onClick={(e) => handleEvent(name, e)}>{name}</button>;

export default Button;
