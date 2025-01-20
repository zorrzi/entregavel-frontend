import { menuItems } from "../../constants/menu-items";
import styled from "styled-components";
import { logout } from "./fetchLogout";
import { useNavigate, useLocation } from "react-router-dom";

export const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = async () => {
        try {
            const { data, response } = await logout();
            if (response.ok) {
                navigate("/");
            } else {
                console.error("Erro ao fazer logout:", data);
            }
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        }
    };

    return (
        <MenuStyles>
            <a href="/user/dashboard/home">
                <Logo
                    src="/nextevent.png"
                    alt="Logo"
                />
            </a>
            <h1>Menu</h1>
            <MenuItems>
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        href={item.href}
                        isActive={location.pathname === item.href}
                    >
                        <Span>
                            {item.icon}
                            {item.label}
                        </Span>
                    </MenuItem>
                ))}
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </MenuItems>
        </MenuStyles>
    );
};

const Logo = styled.img`
    width: 150px;
    cursor: pointer;
`;

const MenuStyles = styled.div`
    grid-column: 1;
    grid-row: 1 / span 2;
    background-color: white;
    padding: 20px;
    border-right: 1px solid #ddd;

    h1{
    margin-bottom: 20px;}
`;

const MenuItems = styled.div`
    display: flex;
    flex-direction: column; /* Coloca os itens um embaixo do outro */
    gap: 10px; /* Espaçamento entre os itens */
`;

interface MenuItemProps {
    isActive: boolean;
}

const MenuItem = styled.a.attrs<MenuItemProps>(({ isActive }) => ({
    style: {
        backgroundColor: isActive ? "#23afb3" : "#fff",
        color: isActive ? "#fff" : "#333",
    },
}))<MenuItemProps>`
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
    transition: background-color 0.3s;

    &:hover {
        background-color: #23afb3;
        color: #fff;
    }
`;


const Span = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const LogoutButton = styled.button`
    display: block;
    padding: 10px 20px;
    background-color: lightgray;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ff3333;
    }
`;
