// components
import ManageData from "./Components/ManageData";
import ListRender from "./Components/ListRender";
import UserDetails from "./Components/UserDetails";


// styles / CSS
import "./App.css";


const users = [
  {
    id: 1,
    nome: "Fábio",
    idade: 23,
    profissao: "Eletrotécnico",
  },
  {
    id: 2,
    nome: "Matheus",
    idade: 27,
    profissao: "Programador",
  },
  {
    id: 3,
    nome: "Junior",
    idade: 17,
    profissao: "Jovem Aprendiz",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <ManageData />
      <ListRender />
      {users.map((user) => (
        <UserDetails 
          key={user.id}
          name={user.nome}
          age={user.idade}
          occupation={user.profissao}
        />
      ))}
    </div>
  );
}

export default App;
