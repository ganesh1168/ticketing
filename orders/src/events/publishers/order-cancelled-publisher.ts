import { subjects, Publisher, OrderCancelledEvent } from '@ggsup133/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: subjects.OrderCancelled = subjects.OrderCancelled;
}
