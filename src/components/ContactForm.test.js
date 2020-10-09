import React from "react";
import { render } from "@testing-library/react";
import { screen } from '@testing-library/dom'
import ContactForm from "./ContactForm";


test("renders component without crashing", () => {
    render(<ContactForm />);
});

test('user can fill out and submit the form', async () => {
    render(<ContactForm />);
    const fNameInput = screen.getByLabelText(/firstName/i);
    const lNameInput = screen.getByLabelText(/lastName/i)
    const eMailInput = screen.getByLabelText(/email/i)
    const mBoxInput = screen.getByLabelText(/message/i)

    fireEvent.change(fNameInput, { target: { value: 'AlexAndrew' } })
    fireEvent.change(lNameInput, { target: { value: 'Mallory' } })
    fireEvent.change(eMailInput, { target: { value: "pytormal@live.com" } })
    fireEvent.change(mBoxInput, { target: { value: "Hello World, my name is AlexAndrew" } })
    
    expect(fNameInput).toHaveValue('AlexAndrew')
    expect(lNameInput).toHaveValue('Mallory')
    expect(eMailInput).toHaveValue('pytormal@live.com')
    expect(mBoxInput).toHaveValue('Hello World, my name is AlexAndrew')

    const button = screen.getByRole('input', { name: /submit/i })
    fireEvent.click(button)

});