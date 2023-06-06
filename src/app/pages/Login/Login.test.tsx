import {render, screen} from '@testing-library/react';
import Login from './Login';


it('should render correct heading', () => {
     render(<Login/>);
     const headingElement = screen.getByText(/login/i);
     expect(headingElement).toBeInTheDocument();
})