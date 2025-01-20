import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./fetchLogin";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, response } = await loginUser(email, password);

      if (response.ok) {
        navigate("/user/dashboard/home");
      } else {
        setError(data.message || "Erro ao fazer login");
      }
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      setError("Ocorreu um erro inesperado. Tente novamente.");
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <Container>
      <FormWrapper>
        <FormContainer>
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">Login</Button>
          </form>
        </FormContainer>
        <OverlayContainer>
          <Overlay>
            <OverlayPanel>
              <Logo src="/nextevent_pure.png" alt="Logo" onClick={() => navigate("/")} />
              <h1>Não tem uma conta?</h1>
              <p>Entre com seus dados pessoais e começe sua jornada conosco!</p>
              <ButtonOutline onClick={handleSignUpClick}>Sign Up</ButtonOutline>
            </OverlayPanel>
          </Overlay>
        </OverlayContainer>
      </FormWrapper>
    </Container>
  );
};

const Logo = styled.img`
  width: 150px;
  cursor: pointer;
  margin-bottom: 50px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: 'Poppins', sans-serif;
  background: url("/background.jpg") no-repeat center center/cover; /* Fundo de tela */
  position: relative;
`;

const FormWrapper = styled.div`
  display: flex;
  background: white;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  max-width: 900px;
  width: 100%;
  position: relative;
  z-index: 2; /* Garante que o formulário esteja acima do fundo */
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  background: #23afb3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: #add3d4;
  }
`;

const ButtonOutline = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: white;
    color: #add3d4;
  }
`;

const OverlayContainer = styled.div`
  flex: 1;
  background: #23afb3;
  color: white;
  display: flex;
  justify-content: center;
  align-items: space-between;
  text-align: center;

  p {
    margin-top: 20px;
    margin-bottom: 15px;
  }
`;

const Overlay = styled.div`
  padding: 50px;
`;

const OverlayPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  text-align: center;
`;
