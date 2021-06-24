import { Publisher, subjects, TicketUpdatedEvent } from '@ggsup133/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: subjects.TicketUpdated = subjects.TicketUpdated;
}
