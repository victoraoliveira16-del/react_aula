import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`

const Img = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <Img src={logo} alt='logo'></Img>
            <p><strong>SENAI Books</strong></p>
        </LogoContainer>
    )
}

export default Logo