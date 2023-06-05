import {render, screen} from '@testing-library/react';
import SignUp from './SignUp';


it('should render correct heading', () => {
     render(<SignUp/>);
     const headingElement = screen.getByText(/Are you new here, please sign Up/i);
     expect(headingElement).toBeInTheDocument();
})