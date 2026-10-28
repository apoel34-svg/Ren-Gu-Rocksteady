import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => {
  const React = require('react');

  return {
    BrowserRouter: ({ children }) => React.createElement(React.Fragment, null, children),
    Routes: ({ children }) => React.createElement(React.Fragment, null, children),
    Route: ({ element }) => element,
    Link: ({ children, to, ...props }) => React.createElement('a', { href: to, ...props }, children),
    useLocation: () => ({ pathname: '/' }),
  };
}, { virtual: true });

test('renders Ren Gu Rocksteady heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /ren gu rocksteady – welcome aboard/i });
  expect(heading).toBeInTheDocument();
});
