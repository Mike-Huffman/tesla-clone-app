import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)

    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="logo" />

            </a>
            <MenuGroup>
                <div>Model S</div>
                <div>Model 3</div>
                <div>Model X</div>
                <div>Model Y</div>
            </MenuGroup>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <MenuIconContainer onClick={()=>setBurgerStatus(true)}>
                    <MenuIcon />
                </MenuIconContainer>
            </RightMenu>
            <BurgerNav status={burgerStatus}>
                <CloseContainer>
                <Close onClick={()=>setBurgerStatus(false)}/>
                </CloseContainer>
                <li><a href="">Model S</a></li>
                <li><a href="">Model 3</a></li>
                <li><a href="">Model X</a></li>
                <li><a href="">Model Y</a></li>
                <li><a href="">More</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">My Account</a></li>               
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

`

const MenuGroup = styled.div`
    display: flex;
    text-transform: uppercase;
    div {
        font-weight: 600;
        padding: 0 10px;
        cursor: pointer;
    }
 
    @media (max-width: 900px) {
        display: none;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding-right: 10px;
    }
    
    @media (max-width: 900px) {
        a {
            display: none;
        }
    }
    
`

const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    @media (min-width: 900px) {
        display: none;
    }
`

const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Close = styled(CloseIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    width: 300px;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), 0 8px 12px rgba(0,0,0,0.45);
    border-radius: 20px 0px 0px 20px;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    list-style: none;
    transform: ${props => props.status ? 'translateX(0%)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        a {
            font-weight: 600;
            text-transform: uppercase;
        }
    }

`