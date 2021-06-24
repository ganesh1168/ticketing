import { Publisher, subjects, TicketCreatedEvent } from '@ggsup133/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: subjects.TicketCreated = subjects.TicketCreated;
}
