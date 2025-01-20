import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckSessionValidity } from "../../../utils/CheckSession/CheckSession";
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Menu } from './components/menu/menu';
import styled from 'styled-components';
import { Home } from './nested/home/homepage';
import CreateEventForm from './nested/new-event/new-event';


export const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const verifySession = async () => {
            try {
                const { data, response } = await CheckSessionValidity();
                if (response.status !== 200 || data.status !== "success") {
                    navigate("/"); // Redireciona para a página de login se a sessão for inválida
                }
            } catch (error) {
                console.error("Erro ao verificar a sessão:", error);
                navigate("/"); // Redireciona em caso de erro na requisição
            }
        };

        
    }, [navigate]);


    return (
        <DashboardStyles>
            <Header/>
            <Menu/>
            <Routes>
                <Route path="home" element={<Home />}/>
                <Route path="new-event" element={<CreateEventForm />}/>
            </Routes>
        </DashboardStyles>
    );
};

const DashboardStyles = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 100px 1fr;
    height: 100vh;
    width: 100vw;
    background-color: #ecedf2;
`