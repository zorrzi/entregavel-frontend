import React, { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { updateEvent } from "./fetchUpdate";

interface UpdateEventButtonProps {
  eventId: string;
  currentData: {
    name: string;
    description: string;
    date: string;
    location: string;
    capacity: number;
    startTime: string;
    endTime: string;
  };
  onEditSuccess?: (updatedEvent: any) => void; // Callback com os dados do evento atualizado
}

const formatTime = (time: string): string => {
  if (!time) return "";
  const [hours, minutes] = time.split(":");
  return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
};

export const UpdateEventButton: React.FC<UpdateEventButtonProps> = ({
  eventId,
  currentData,
  onEditSuccess,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    ...currentData,
    startTime: formatTime(currentData.startTime),
    endTime: formatTime(currentData.endTime),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const { data, response } = await updateEvent(eventId, formData);
      if (response.ok) {
        toast.success(data.message || "Evento atualizado com sucesso");
        setIsEditing(false);
        if (onEditSuccess) onEditSuccess({ ...formData, _id: eventId }); // Passa os dados atualizados
      } else {
        toast.error(data.message || "Erro ao atualizar o evento");
      }
    } catch (error) {
      console.error("Erro ao atualizar evento:", error);
      toast.error("Ocorreu um erro ao atualizar o evento.");
    }
  };

  return (
    <>
      <EditIcon
        src="/edit.png"
        alt="Editar evento"
        onClick={() => setIsEditing(true)}
      />
      {isEditing && (
        <EditModal>
          <ModalContent>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nome do evento"
            />
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Descrição"
            />
            <Input
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              placeholder="Data (YYYY-MM-DD)"
            />
            <Input
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Local"
            />
            <Input
              name="capacity"
              type="number"
              value={formData.capacity}
              onChange={handleInputChange}
              placeholder="Capacidade"
            />
            <Input
              name="startTime"
              type="time"
              value={formData.startTime}
              onChange={handleInputChange}
              placeholder="Horário de início"
            />
            <Input
              name="endTime"
              type="time"
              value={formData.endTime}
              onChange={handleInputChange}
              placeholder="Horário de término"
            />
            <ButtonContainer>
              <SaveButton onClick={handleSave}>Salvar</SaveButton>
              <CancelButton onClick={() => setIsEditing(false)}>Cancelar</CancelButton>
            </ButtonContainer>
          </ModalContent>
        </EditModal>
      )}
    </>
  );
};

const EditIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: opacity 0.3s, filter 0.3s;

  &:hover {
    opacity: 0.8;
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(0.9);
  }
`;

const EditModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

const SaveButton = styled.button`
  background: #24adb4;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  width: 100%;
  flex: 1;
  transition: background-color 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const CancelButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  width: 100%;
  flex: 1;
  transition: background-color 0.3s;

  &:hover {
    background: #c82333;
  }
`;
