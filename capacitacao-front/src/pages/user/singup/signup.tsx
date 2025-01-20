import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { SignupForm } from './components/signup/signup-form';

export const Signup = () => {
    return (
        <SignupStyles>
            <Routes>
                <Route path="/" element={<SignupForm />} />
            </Routes>
        </SignupStyles>
    );
};

const SignupStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #f6f5f7;
`;
