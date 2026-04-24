
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

// O styled components possui uma biblioteca para uso
const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
    margin-right: 10px;
`

const icones = [perfil, sacola];

function IconesHeader() {
    return (

        <Icones>
            {icones.map((icone) => (
                <Icone><img src={icone}></img></Icone>
            ))}
        </Icones>
    )
}
export default IconesHeader;