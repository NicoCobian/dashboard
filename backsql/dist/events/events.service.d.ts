export declare class EventsService {
    private db;
    constructor();
    getEvents(): Promise<unknown>;
    createEvent(eventData: any): Promise<unknown>;
    updateEvent(id: number, eventData: any): Promise<unknown>;
    deleteEvent(id: number): Promise<unknown>;
    getEventById(id: number): Promise<unknown>;
}
