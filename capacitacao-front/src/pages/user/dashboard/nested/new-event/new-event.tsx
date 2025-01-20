import React, { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { createEvent } from "./api/fetchCreateEvent";

const CreateEventForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        date: "",
        location: "",
        capacity: 0,
        start_time: "",
        end_time: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { data, response } = await createEvent(formData);

            if (response.ok) {
                toast.success(data.message || "Evento criado com sucesso!");
                setFormData({
                    name: "",
                    description: "",
                    date: "",
                    location: "",
                    capacity: 0,
                    start_time: "",
                    end_time: "",
                });
            } else {
                toast.error(data.message || "Erro ao criar evento.");
            }
        } catch (error) {
            console.error("Erro ao criar evento:", error);
            toast.error("Ocorreu um erro ao criar o evento.");
        }
    };

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <h2>Criar Evento</h2>
                <Input
                    type="text"
                    name="name"
                    placeholder="Nome do evento"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <TextArea
                    name="description"
                    placeholder="Descrição do evento"
                    value={formData.description}
                    onChange={handleChange}
                />
                <Input
                    type="date"
                    name="date"
                    placeholder="Data do evento"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="location"
                    placeholder="Local do evento"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="number"
                    name="capacity"
                    placeholder="Capacidade do evento"
                    value={formData.capacity}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="time"
                    name="start_time"
                    placeholder="Horário de início"
                    value={formData.start_time}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="time"
                    name="end_time"
                    placeholder="Horário de término"
                    value={formData.end_time}
                    onChange={handleChange}
                    required
                />
                <Button type="submit">Criar Evento</Button>
            </Form>
        </Wrapper>
    );
};

export default CreateEventForm;

const Wrapper = styled.div`
    background-color: #ecedf2;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 30px auto;

    @media (max-width: 480px) {
        padding: 20px;
        margin: 20px auto;
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
        color: #24adb4;
        font-size: 24px;

        @media (max-width: 480px) {
            font-size: 20px;
        }
    }
`;

const Input = styled.input`
    margin-bottom: 15px;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 480px) {
        padding: 10px;
        font-size: 14px;
    }
`;

const TextArea = styled.textarea`
    margin-bottom: 15px;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
    resize: none;
    box-sizing: border-box;

    @media (max-width: 480px) {
        padding: 10px;
        font-size: 14px;
    }
`;

const Button = styled.button`
    background-color: #24adb4;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 12px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #70c7ca;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }

    @media (max-width: 480px) {
        font-size: 14px;
        padding: 10px;
    }
`;
