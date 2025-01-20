import { useMatches } from "react-router-dom";
import styled from "styled-components";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";

export function Header() {
  const matches = useMatches();

  return (
    <HeaderStyle>
      <BreadcrumbContainer>
        <BreadcrumbListStyled>
          {matches.map((match, index) => {
            const breadcrumbLabel = match.pathname.split("/").pop();
            return (
              <BreadcrumbWrapper key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLinkStyled href={match.pathname}>
                    {breadcrumbLabel}
                  </BreadcrumbLinkStyled>
                </BreadcrumbItem>
                {index < matches.length - 1 && <BreadcrumbSeparatorStyled />}
              </BreadcrumbWrapper>
            );
          })}
        </BreadcrumbListStyled>
      </BreadcrumbContainer>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
width: 100%;
  background-color: #ecedf2;
  box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

const BreadcrumbContainer = styled(Breadcrumb)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BreadcrumbListStyled = styled(BreadcrumbList)`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none; /* Remove os pontos */
  padding: 0; /* Remove o espaçamento interno */
  margin: 0; /* Remove o espaçamento externo */
`;

const BreadcrumbWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BreadcrumbLinkStyled = styled(BreadcrumbLink)`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: #007bff;
  }
`;

const BreadcrumbSeparatorStyled = styled(BreadcrumbSeparator)`
display: inline-block;
  font-size: 3px; /* Ajusta o tamanho da seta */
  color: rgba(0, 0, 0, 0.6); /* Define a cor da seta */
  margin: 0 8px; /* Ajusta o espaçamento entre o link e a seta */
`;
