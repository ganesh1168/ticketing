import { Publisher, OrderCreatedEvent, subjects } from '@ggsup133/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: subjects.OrderCreated = subjects.OrderCreated;
}
