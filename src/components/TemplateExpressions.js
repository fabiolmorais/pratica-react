const TemplateExpressions = () => {
  const name = "Fábio";
  const data = {
    age: 23,
    job: "Programador",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
      <p>{4+4}</p>
    </div>
  );
};

export default TemplateExpressions;
