import {render, screen} from '@testing-library/react';
import AboutUs from './AboutUs';


it('should render correct heading', () => {
     render(<AboutUs/>);
     const headingElement = screen.getByText(/about your working buddy/i);
     expect(headingElement).toBeInTheDocument();
})