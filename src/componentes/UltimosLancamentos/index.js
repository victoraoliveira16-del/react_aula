import { livros } from "./dadosUltimosLancamentos"
import styled from "styled-components"
import { Titulo } from "../Titulo"
import CardRecomenda from "../CardRecomenda"
import imagemLivro from '../../imagens/livro2.png';

const UltimosLancamentosContanier = styled.section`
background-color: #EBECEE;
padding-bottom: 20px;
display: flex;
flex-direction: column;
`

const NovosLivrosContainer = styled.div`
margin-top: 30px;
display: flex;
width: 100%;
justify-content: center;
cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContanier>
            <Titulo
                cor={"#000"}
                tamanhoFonte={"36px"}>
                UTLIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {
                    livros.map(livro => (
                        <img src={livro.src} />
                    ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Costruindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContanier >
    )
}

export default UltimosLancamentos