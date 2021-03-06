import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

test('on initial render, the book reservation button is disabled', () => {
  const { getByTestId } = render(
    <ContactForm toggleCalendarForm={jest.fn} addContactInfo={jest.fn} />
  );

  expect(getByTestId('button')).toBeDisabled();
});
