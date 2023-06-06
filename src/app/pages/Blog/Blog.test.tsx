import {render, screen} from '@testing-library/react';
import Blog from './Blog';


it('should render correct heading', () => {
     render(<Blog/>);
     const headingElement = screen.getByText(/read some of our content/i);
     expect(headingElement).toBeInTheDocument();
})