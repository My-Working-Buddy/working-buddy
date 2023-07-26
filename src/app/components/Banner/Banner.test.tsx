import {render, screen} from '@testing-library/react';
import Banner from './Banner';

describe('Banner Component', () => {
  it('ensure alt contains correct value', () => {
    render(<Banner/>)
    const testIMage = screen.getByAltText(/banner-logo/i)
  expect(testIMage).toBeInTheDocument()
  })
  
  it('ensure src contains correct value', () => {
    render(<Banner/>)
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.src).toContain("http://localhost/mwb-canva.jpg")

  })
})

describe("Banner Text", () => {

  it('renders banner text', () => {
    render(<Banner/>)
    const messageTest = screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum/i)
    expect(messageTest).toBeInTheDocument()
  })
})