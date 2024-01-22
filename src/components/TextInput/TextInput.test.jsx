/* eslint-disable no-undef */
import { userEvent } from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';

// eslint-disable-next-line no-undef
test('TextInput Component Text', async () => {
  const user = userEvent.setup();
  render(<TextInput />);

  const textElement = screen.getByText('Input Text:');
  expect(textElement).toBeInTheDocument();

  const inputElement = screen.getByLabelText('Text Input');
  await user.type(inputElement, 'Hello World!');
  expect(screen.getByText('Input Text: Hello World!')).toBeInTheDocument();
});
