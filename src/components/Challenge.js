const Challenge = () => {
  const firstNumber = 2;
  const secondNumber = 2;

  const handleClick = () => {
    return console.log(firstNumber + secondNumber);
  };

  return (
    <div>
      <h1>Soma de números:</h1>
      <p>primeiro número: {firstNumber}</p>
      <p>segundo número: {secondNumber}</p>
      <button onClick={handleClick}>Somar</button>
    </div>
  );
};

export default Challenge;
