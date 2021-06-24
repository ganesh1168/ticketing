import {
  subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ggsup133/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: subjects.ExpirationComplete = subjects.ExpirationComplete;
}
