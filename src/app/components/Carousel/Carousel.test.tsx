import {render, screen} from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel Component', () => {
  it('ensure alt contains correct value', () => {
    render(<Carousel/>)
    const testAlt = screen.getByAltText(/image/i)
  expect(testAlt).toBeInTheDocument()

  })})