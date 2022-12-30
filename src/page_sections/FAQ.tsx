import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import './FAQ.css';

const FAQ = () => {
  const data = [
    {
      value: 'item-1',
      trigger: 'What time is check in/out?',
      content:
        'Check-in starts at 15:00. Check-out is until 12:00. If you need to check in earlier or check out later - please contact our staff.'
    },
    {
      value: 'item-2',

      trigger: 'Are the rooms suitable for kids/disabled people?',
      content:
        'If the child sleeps in a separate bed than the parents, it is possible to add an additional single bed. The cost of such a service is PLN 100. Two of our rooms have been specially designed and adapted to the needs of disabled guests.'
    },
    {
      value: 'item-3',

      trigger: 'Are pets allowed?',
      content:
        'Our hotel is open to all guests, including the four-legged ones, and there are no additional fees.'
    },
    {
      value: 'item-4',

      trigger: 'Can I cancel my reservation, if so, how?',
      content:
        'Reservations made in the return offer can be canceled free of charge until 2pm on the day of arrival - by contacting our staff by phone or e-mail. Non-refundable reservations are not subject to free cancellation.'
    },
    {
      value: 'item-5',

      trigger: 'Is there parking at the hotel?',
      content:
        'HURON Łódź has 17 parking spaces in the underground garage. The fee per night is PLN 70. We do not reserve parking spaces and their number is limited.'
    }
  ];
  return (
    <section className="faq-section">
      <h2 className="faq-h2">FREQUENTLY ASKED QUESTIONS</h2>
      <Accordion.Root className="faq-accordion-root" type="single" collapsible>
        {data.map((item) => (
          <Accordion.Item className="faq-accordion-item" value={item.value}>
            <Accordion.Trigger className="faq-accordion-trigger">
              {item.trigger}
              <ChevronDownIcon className="faq-accordion-chevron" aria-hidden />
            </Accordion.Trigger>
            <Accordion.Content className="faq-accordion-content">
              {item.content}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
};

export default FAQ;
