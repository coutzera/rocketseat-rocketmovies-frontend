import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link  >
            <h1>Novo Filme</h1>
          </header>
          <div className="first-line">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="background">
              <NoteItem value="react" />
              <NoteItem value="nodejs" />
              <NoteItem placeholder="Novo Marcador" isNew />
            </div>
          </Section>
          <div className="footer">
            <Button title="Excluir filme" className="invert" />
            <Button title="Salvar Alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
