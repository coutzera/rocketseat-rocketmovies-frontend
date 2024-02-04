import { Container, Profile, Brand } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <Brand>RocketMovies</Brand>
      <Input placeholder="Teste aqui" />
      <Profile to="/profile">
        <div>
          <strong>Hudson Coutinho</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/coutzera.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}
