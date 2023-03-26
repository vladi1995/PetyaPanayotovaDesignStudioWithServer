import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

test('Email input should be rendered', () => {
    render(
        <BrowserRouter><Login /></BrowserRouter>
    );
    const emailInputElement = screen.getByLabelText('Email:');
    expect(emailInputElement).toBeInTheDocument();
});

test('Password input should be rendered', () => {
    render(
        <BrowserRouter><Login /></BrowserRouter>
    );
    const passwordInputElement = screen.getByLabelText('Password:');
    expect(passwordInputElement).toBeInTheDocument();
});

test('Button should be rendered', () => {
    render(
        <BrowserRouter><Login /></BrowserRouter>
    );
    const buttonInputElement = screen.getByDisplayValue('Login');
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