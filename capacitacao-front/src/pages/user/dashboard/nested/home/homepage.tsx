import styled from "styled-components";
import { useState, useEffect } from "react";
import { GetAllEvents } from "./api/fetchEventos";
import { EventCard } from "../../components/event-card";
import toast from "react-hot-toast";

export const Home = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchEvents = async () => {
    try {
      const { data, response } = await GetAllEvents();
      if (response.ok) {
        setEvents(data.events);
      } else {
        toast.error(data.message || "Erro ao buscar eventos");
      }
    } catch (error) {
      toast.error("Erro ao carregar eventos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleEditSuccess = (updatedEvent: any) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event._id === updatedEvent._id ? { ...event, ...updatedEvent } : event
      )
    );
  };

  const handleDeleteSuccess = (deletedEventId: string) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event._id !== deletedEventId));
  };

  return (
    <HomeStyles>
      <h1>Eventos Disponíveis</h1>
      {loading ? (
        <p>Carregando eventos...</p>
      ) : events.length > 0 ? (
        <CardContainer>
          {events.map((event) => (
            <EventCard
              key={event._id}
              eventId={event._id}
              title={event.name}
              date={new Date(event.date).toLocaleDateString()}
              description={event.description}
              location={event.location}
              capacity={event.capacity}
              startTime={event.start_time}
              endTime={event.end_time}
              participants={event.participants}
              onEditSuccess={handleEditSuccess}
              onDeleteSuccess={() => handleDeleteSuccess(event._id)}
            />
          ))}
        </CardContainer>
      ) : (
        <p>Nenhum evento disponível</p>
      )}
    </HomeStyles>
  );
};

const HomeStyles = styled.div`
  background-color: #ecedf2;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin-bottom: 28px;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    color: #333;
  }

  p {
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;
