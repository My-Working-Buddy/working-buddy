import {render, screen} from '@testing-library/react';
import ContactUs from './ContactUs';


it('should render correct heading', () => {
     render(<ContactUs/>);
     const headingElement = screen.getByText(/Get in-touch with us/i);
     expect(headingElement).toBeInTheDocument();
})