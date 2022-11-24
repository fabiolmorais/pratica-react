const UserDetails = ({ name, age, occupation }) => {
  return (
    <div>
      <h2>Lista de Pessoas:</h2>
      <ul>
        <li>
          Nome:{" "}
          <b>
            <em>{name}</em>
          </b>
          , idade:{" "}
          <b>
            <em>{age}</em>
          </b>{" "}
          e profissão:{" "}
          <b>
            <em>{occupation}</em>
          </b>
        </li>
        {age >= 18 ? (
          <p>Já pode tirar carteira de habilitação!</p>
        ) : (
          <p>Não pode tirar carteira de habilitação!</p>
        )}
      </ul>
    </div>
  );
};

export default UserDetails;
