import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { LoginForm } from './components/login/login-form';

export const Login = () => {
    return (
        <LoginStyles>
            <Routes>
                <Route path="/" element={<LoginForm />} />
            </Routes>
        </LoginStyles>
    );
};

const LoginStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #f6f5f7;
`;
