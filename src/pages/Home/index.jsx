import { Container, Content, NewMovie } from "./styles";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { FiPlus } from "react-icons/fi";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <header>
          <h1>Meus filmes</h1>

          <NewMovie to="/new">
            <FiPlus />
            Adicionar filme
          </NewMovie>
        </header>

        <Content>
          <Note
            data={{
              title: "Interestellar",
              description: "Aqui entrará todo o texto explicativo do filme",
              rating: 5,
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          ></Note>
          <Note
            data={{
              title: "Interestellar",
              description: "Aqui entrará todo o texto explicativo do filme",
              rating: 3,
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          ></Note>
        </Content>
      </main>
    </Container>
  );
}
