import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

const the = {
  footer: () => screen.getAllByTestId('Footer'),
};

describe('<Footer />', () => {
  it('has no accessibility issues', async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('render the correct headlines', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/Services/i)).toBeInTheDocument();
    expect(getByText(/Resources/i)).toBeInTheDocument();
    expect(getByText(/Company/i)).toBeInTheDocument();
    expect(getByText(/Support/i)).toBeInTheDocument();
  });
});
