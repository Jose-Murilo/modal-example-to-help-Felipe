import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import App from "./App"

describe("App", () => {
  it("Text should be rendered on screen ", () => {
    const { getByText } = render(<App />)
    expect(getByText("Hello World")).toBeVisible()
  })
})