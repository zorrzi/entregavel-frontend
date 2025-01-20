import styled from "styled-components";
import { DeleteEventButton } from "./delete-button/delete-button"; // Botão de deletar
import { UpdateEventButton } from "./update-button/update-button"; // Botão de editar

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  location: string;
  capacity: number;
  startTime: string;
  endTime: string;
  participants: string[];
  eventId: string;
  onDeleteSuccess?: () => void; // Callback para exclusão bem-sucedida
  onEditSuccess?: () => void; // Callback para edição bem-sucedida
}

export const EventCard = ({
  title,
  date,
  description,
  location,
  capacity,
  startTime,
  endTime,
  participants,
  eventId,
  onDeleteSuccess,
  onEditSuccess,
}: EventCardProps) => {
  return (
    <Card>
      <Header>
        <h2>{title}</h2>
        <p>{date}</p>
      </Header>
      <Body>
        <p>
      <Icons
      src="/info.png"
      alt="informacoes"
      />
      {description}
        </p>
        <p>
        <Icons
      src="/location.png"
      alt="localizacao"
      />
      {location}
        </p>
        <p>
        <Icons
      src="/clock.png"
      alt="horario"
      />
      {startTime} - {endTime}
        </p>
        <p>
        <Icons
      src="/people.png"
      alt="capacidade"
      />
      {capacity}
        </p>
        
        <p>
        <Icons
      src="/clipboard.png"
      alt="lista de participantes"
      />
      {" "}
          {participants.length > 0 ? participants.join(", ") : "Nenhum participante"}
        </p>
      </Body>
      <Footer>
        <ButtonsContainer>
        <UpdateEventButton
              eventId={eventId}
              currentData={{
                name: title,
                description,
                date,
                location,
                capacity,
                startTime,
                endTime,
              }}
              onEditSuccess={onEditSuccess}
            />
          <DeleteEventButton eventId={eventId} onDeleteSuccess={onDeleteSuccess} />
        </ButtonsContainer>
      </Footer>
    </Card>
  );
};

const Card = styled.div`
  background: #add3d4;
  color: #ffffff;
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s, box-shadow 0.3s;

`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  
  

  h2 {
    color: black;
    font-size: 32px;
    margin: 0;
  }

  p {
    font-size: 19px;
    margin: 0;
    font-style: italic;
    color: black;
  }
`;

const Body = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  p {
    font-size: 18px;
    margin: 5px 0;
    line-height: 1.5;
    display: flex;
    align-items: center;
    gap: 7px;

    strong {
      font-weight: bold;
      color: rgba(255, 255, 255, 0.9);
    }
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;
  gap: 10px;
`;

const DetailsButton = styled.button`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    transform: scale(1.05);
  }
`;

const Icons = styled.img`
  width: 24px;
  height: 24px;

`;
