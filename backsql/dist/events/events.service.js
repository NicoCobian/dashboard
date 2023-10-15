"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const sqlite3 = require("sqlite3");
let EventsService = class EventsService {
    constructor() {
        this.db = new sqlite3.Database('./event7-db.db');
    }
    getEvents() {
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
    createEvent(eventData) {
        return new Promise((resolve, reject) => {
            const { name, description, type, priority } = eventData;
            this.db.run('INSERT INTO events (name, description, type, priority) VALUES (?, ?, ?, ?)', [name, description, type, priority], (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve('Event created');
            });
        });
    }
    updateEvent(id, eventData) {
        return new Promise((resolve, reject) => {
            const { name, description, type, priority } = eventData;
            this.db.run('UPDATE events SET name = ?, description = ?, type = ?, priority = ? WHERE id = ?', [name, description, type, priority, id], (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve('Event updated');
            });
        });
    }
    deleteEvent(id) {
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
    getEventById(id) {
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
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EventsService);
//# sourceMappingURL=events.service.js.map