import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('renders contactForm', () => {
    render(<ContactForm/>)
})

test('able to add data to form', () => {
    render(<ContactForm />);

    const fNameInput = screen.getByLabelText('firstName');
    userEvent.type(fNameInput, "AlexAndrew")

    expect(fNameInput).toHaveValue('AlexAndrew')

})