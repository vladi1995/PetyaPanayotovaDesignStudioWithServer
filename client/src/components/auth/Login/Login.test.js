import { render, screen } from '@testing-library/react';
import Login from './Login';

test("Email input should be rendered", () => {
    render(<Login />);
    const emailEl = screen.getByRole('textbox', {name: 'email'});
    expect(emailEl).toBeInTheDocument();
});