import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Login from './Login';

test('Input fields should be rendered', () => {
    render(
        <BrowserRouter><Login /></BrowserRouter>
    );
    const emailInputElement = screen.getByLabelText('Email:');
    const passwordInputElement = screen.getByLabelText('Password:');
    const buttonInputElement = screen.getByDisplayValue('Login');

    expect(emailInputElement).toBeInTheDocument();
    expect(passwordInputElement).toBeInTheDocument();
    expect(buttonInputElement).toBeInTheDocument();
});

test('Email input should be empty', () => {
    render(
        <BrowserRouter><Login /></BrowserRouter>
    );
    const emailInputElement = screen.getByLabelText('Email:');
    expect(emailInputElement.value).toBe("");
});

test('Password input should be empty', () => {
    render(
        <BrowserRouter><Login /></BrowserRouter>
    );
    const passwordInputElement = screen.getByLabelText('Password:');
    expect(passwordInputElement.value).toBe("");
});

test('Button should be disabled', () => {
    render(
        <BrowserRouter><Login /></BrowserRouter>
    );
    const buttonInputElement = screen.getByDisplayValue('Login');
    expect(buttonInputElement).toBeDisabled();
});

test('Email input should change', () => {
    render(
        <BrowserRouter><Login /></BrowserRouter>
    );
    const emailInputElement = screen.getByLabelText('Email:');
    const testValue = "test@abv.bg";
    
    fireEvent.change(emailInputElement, {target: {value: testValue}});
    expect(emailInputElement.value).toBe(testValue);
});

test('Password input should change', () => {
    render(
        <BrowserRouter><Login /></BrowserRouter>
    );
    const passwordInputElement = screen.getByLabelText('Password:');
    const testValue = "12345";
    
    fireEvent.change(passwordInputElement, {target: {value: testValue}});
    expect(passwordInputElement.value).toBe(testValue);
});

test('Button should not be disabled when inputs exist', () => {
    render(
        <BrowserRouter><Login /></BrowserRouter>
    );
    const buttonInputElement = screen.getByDisplayValue('Login');
    const emailInputElement = screen.getByLabelText('Email:');
    const passwordInputElement = screen.getByLabelText('Password:');

    const testValueEmail = "test@abv.bg";
    const testValuePass = "12345";

    fireEvent.change(emailInputElement, {target: {value: testValueEmail}});
    fireEvent.change(passwordInputElement, {target: {value: testValuePass}});

    expect(buttonInputElement).not.toBeDisabled();
});

test("Should allow the user to submit their credentials", () => {
    const submit = jest.fn();
    render(<BrowserRouter><Login submit={submit}/></BrowserRouter>);

    const emailInputElement = screen.getByLabelText('Email:');
    const passwordInputElement = screen.getByLabelText('Password:');
    const buttonInputElement = screen.getByDisplayValue('Login');

    userEvent.type(emailInputElement, "test@abv.bg");
    userEvent.type(passwordInputElement, "12345");
    userEvent.click(buttonInputElement);

    expect(submit).toHaveBeenCalledWith({
        email: "test@abv.bg",
        password: "12345",
    });
});