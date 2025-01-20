import React from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { deleteEvent } from "./fetchDelete";

interface DeleteEventButtonProps {
  eventId: string;
  onDeleteSuccess?: () => void;
}

export const DeleteEventButton: React.FC<DeleteEventButtonProps> = ({ eventId, onDeleteSuccess }) => {
  const handleDelete = async () => {

    try {
      const { data, response } = await deleteEvent(eventId);
      if (response.ok) {
        toast.success(data.message || "Evento excluído com sucesso");
        if (onDeleteSuccess) onDeleteSuccess();
      } else {
        toast.error(data.message || "Erro ao excluir o evento");
      }
    } catch (error) {
      console.error("Erro ao deletar evento:", error);
      toast.error("Ocorreu um erro ao excluir o evento.");
    }
  };

  return (
    <DeleteIcon
      src="/trash.png" // Caminho para a imagem no diretório `public`
      alt="Excluir evento"
      onClick={handleDelete}
    />
  );
};

const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;
