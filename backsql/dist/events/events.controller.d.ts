import { EventsService } from './events.service';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(eventData: any): Promise<unknown>;
    findAll(): Promise<unknown>;
    findOne(id: string): Promise<unknown>;
    update(id: string, eventData: any): Promise<unknown>;
    remove(id: string): Promise<unknown>;
}
