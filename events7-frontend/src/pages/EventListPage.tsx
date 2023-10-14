// EventListPage.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './styles/EventListPage.css';

type EventData = {
  id: number;
  name: string;
  description: string;
  type: string;
  priority: number;
};

const EventListPage = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [editEventId, setEditEventId] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error al cargar los eventos:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleUpdate = (eventId: number) => {
    setEditEventId(eventId);
  };

  const handleCancelEdit = () => {
    setEditEventId(null);
  };

  const handleSaveUpdate = async (eventId: number) => {
    try {
      const editedEvent = events.find((event) => event.id === eventId);

      if (editedEvent) {
        await axios.put(`http://localhost:3001/events/${eventId}`, editedEvent);
        setEditEventId(null);

        const updatedEvents = events.map((event) =>
          event.id === eventId ? editedEvent : event
        );
        setEvents(updatedEvents);
      } else {
        console.error('El evento a editar no existe.');
      }
    } catch (error) {
      console.error('Error al guardar la actualización:', error);
    }
  };

  const handleDelete = async (eventId: number) => {
    try {
      await axios.delete(`http://localhost:3001/events/${eventId}`);
      const updatedEvents = events.filter((event) => event.id !== eventId);
      setEvents(updatedEvents);
    } catch (error) {
      console.error('Error al eliminar el evento:', error);
    }
  };

  const handleEditInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    eventId: number
  ) => {
    const { name, value } = e.target;
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId ? { ...event, [name]: value } : event
      )
    );
  };

  return (
    <div className="container">
      <h1>Event List</h1>
      <Link to="/create">Create Event</Link>
      <ul className="event-list">
        {events.map((event) => (
          <li className="event-card" key={event.id}>
            <h2>Event {event.id}</h2>
            {editEventId === event.id ? (
              <div className="edit-form">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={event.name}
                  onChange={(e) => handleEditInputChange(e, event.id)}
                />
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  name="description"
                  value={event.description}
                  onChange={(e) => handleEditInputChange(e, event.id)}
                />
                <label htmlFor="type">Type:</label>
                <select
                  name="type"
                  value={event.type}
                  onChange={(e) => handleEditInputChange(e, event.id)}
                >
                  <option value="ads">Ads</option>
                  <option value="app">App</option>
                  <option value="liveops">LiveOps</option>
                  <option value="crosspromo">Cross Promo</option>
                </select>
                <label htmlFor="priority">Priority:</label>
                <input
                  type="number"
                  name="priority"
                  value={event.priority}
                  onChange={(e) => handleEditInputChange(e, event.id)}
                />
                <button onClick={() => handleSaveUpdate(event.id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div className="event-details">
                <p><strong>Name:</strong> {event.name}</p>
                <p><strong>Description:</strong> {event.description}</p>
                <p><strong>Type:</strong> {event.type}</p>
                <p><strong>Priority:</strong> {event.priority}</p>
                <button onClick={() => handleUpdate(event.id)}>Edit</button>
                <button onClick={() => handleDelete(event.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventListPage;
