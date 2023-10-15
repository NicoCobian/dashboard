/* eslint-disable prettier/prettier */
// events.service.ts
import { Injectable } from '@nestjs/common';
import * as sqlite3 from 'sqlite3';

@Injectable()
export class EventsService {
  private db: sqlite3.Database;

  constructor() {
    // Conecta a tu base de datos SQLite
    this.db = new sqlite3.Database('./event7-db.db');
  }

  getEvents() {
    // Implementa la lógica para obtener eventos de la base de datos SQLite
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM events', (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);
      });
    });
  }

  createEvent(eventData: any) {
    // Implementa la lógica para crear un evento en la base de datos SQLite
    return new Promise((resolve, reject) => {
      const { name, description, type, priority } = eventData;
      this.db.run(
        'INSERT INTO events (name, description, type, priority) VALUES (?, ?, ?, ?)',
        [name, description, type, priority],
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve('Event created');
        }
      );
    });
  }

  updateEvent(id: number, eventData: any) {
    // Implementa la lógica para actualizar un evento en la base de datos SQLite
    return new Promise((resolve, reject) => {
      const { name, description, type, priority } = eventData;
      this.db.run(
        'UPDATE events SET name = ?, description = ?, type = ?, priority = ? WHERE id = ?',
        [name, description, type, priority, id],
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve('Event updated');
        }
      );
    });
  }

  deleteEvent(id: number) {
    // Implementa la lógica para eliminar un evento de la base de datos SQLite
    return new Promise((resolve, reject) => {
      this.db.run('DELETE FROM events WHERE id = ?', id, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve('Event deleted');
      });
    });
  }

  getEventById(id: number) {
    // Implementa la lógica para obtener un evento por su ID desde la base de datos SQLite
    return new Promise((resolve, reject) => {
      this.db.get('SELECT * FROM events WHERE id = ?', id, (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(row);
      });
    });
  }
}

