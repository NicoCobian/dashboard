/* eslint-disable prettier/prettier */
// events.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async create(@Body() eventData: any) {
    return await this.eventsService.createEvent(eventData);
  }

  @Get()
  async findAll() {
    return await this.eventsService.getEvents();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.eventsService.getEventById(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() eventData: any) {
    return await this.eventsService.updateEvent(+id, eventData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.eventsService.deleteEvent(+id);
  }
}