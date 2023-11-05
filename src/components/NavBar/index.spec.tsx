import "@testing-library/jest-dom"
import { fireEvent, getByText, render, screen, waitFor } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Navbar } from "./index"

describe("NavBar", () => {
  it("Should be rendering the NavBar", () => {
    render(<Navbar />)

    const verifyNavBarInDocument = screen.getByTestId("navbar")
    expect(verifyNavBarInDocument).toBeVisible()

  })

  it("Should display the modal when the contact item is clicked", () => {
    const { getByText, getByTestId } = render(<Navbar />);

    const textContact = getByText('Contato');
    const modalInDocument = getByTestId("modal");

    // Simular o click no contato
    fireEvent.click(textContact);

    // Verifique se o modal está no documento
    expect(modalInDocument).toBeVisible();

    const emailText = screen.getByText("Email:");
    expect(emailText).toBeInTheDocument();
  });
})