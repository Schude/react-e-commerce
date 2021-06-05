import React from "react";
import { HeaderContainer, NavItem, NavList, Count } from "./styles";
import { Link } from "react-router-dom";
import CartIcon from "../../Icon/shopping-cart.png";
const Header = ({ count }) => {
    return (
        <HeaderContainer>
            <NavList>
                <NavItem>
                    {" "}
                    <Link to="/"> Home </Link>
                </NavItem>
                <NavItem>
                    {" "}
                    <Link to="/favorites"> Favorites </Link>
                </NavItem>
                <NavItem>Contact</NavItem>
                <NavItem>
                    {" "}
                    <Count> {count} </Count>
                    <Link to="/cart">
                        {" "}
                        <img src={CartIcon} alt="Cart" />{" "}
                    </Link>
                </NavItem>
            </NavList>
        </HeaderContainer>
    );
};

export default Header;
