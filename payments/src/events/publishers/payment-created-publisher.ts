import { subjects, Publisher, PaymentCreatedEvent } from '@ggsup133/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: subjects.PaymentCreated = subjects.PaymentCreated;
}
