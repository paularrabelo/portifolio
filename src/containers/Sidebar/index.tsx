import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, Botao, SidebarContainer } from "./styles"

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Paula Rabelo</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        paularrabelo
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev Full Stack
      </Descricao>
      <Botao onClick={props.trocaTema}>
        Trocar tema
      </Botao>
    </SidebarContainer>
  </aside>
)

export default Sidebar
