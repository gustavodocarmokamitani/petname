import { render, screen } from '@testing-library/react';
import App from './App';

test('renders petname header', () => {
  render(<App />);
  const el = screen.getByText(/petname/i);
  expect(el).toBeInTheDocument();
});
