import { render } from '@testing-library/react';
import Navbar from './Navbar';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('<Navbar />', () => {
  it('has no accessibility issues', async () => {
    const { container } = render(<Navbar />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  //   it('renders navbar links', () => {
  //     const { getAllByText } = render(<Navbar />);
  //     expect(getAllByText(/Blog/i)[0]).toBeInTheDocument();
  //     expect(getAllByText(/About Us/i)[0]).toBeInTheDocument();
  //     expect(getAllByText(/Contact Us/i)[0]).toBeInTheDocument();
  //     expect(getAllByText(/Sign In/i)[0]).toBeInTheDocument();
  //   });
});
