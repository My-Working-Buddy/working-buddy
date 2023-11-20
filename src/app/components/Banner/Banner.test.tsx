import {render, screen} from '@testing-library/react';
import Banner from './Banner';

describe('Banner Component', () => {
  it('ensure alt contains correct value', () => {
    render(<Banner/>)
    const testAlt = screen.getByAltText(/banner-logo/i)
  expect(testAlt).toBeInTheDocument()
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
    const messageTest = screen.getByText(/Introducing My Working Buddy/i)
    expect(messageTest).toBeInTheDocument()
  })
})