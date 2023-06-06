import { act, render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('<Navbar />', () => {
  it('has no accessibility issues', async () => {
    await act(async () => {
      const { container } = render(<Navbar />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  it('renders navbar links', async () => {
    render(<Navbar />);

    const links = screen.getAllByRole('link');

    await act(async () => {
      expect(links.length).toBe(4);
      expect(links[1]).toHaveTextContent('About Us');
      expect(links[2]).toHaveTextContent('Contact Us');
      expect(links[3]).toHaveTextContent('Blog');
    });
  });
});
