import {render, screen} from '@testing-library/react';
import Navbar from './Navbar';

// hii itni integration test
describe('Navbar', () => {
    it("tests navbar", () => {
        const {getByText} = render(<Navbar/>);
         expect (getByText(/Blog/i)).toBeInTheDocument(); 
         expect (getByText(/About Us/i)).toBeInTheDocument(); 
         expect (getByText(/Contact Us/i)).toBeInTheDocument(); 
         expect (getByText(/Sign In/i)).toBeInTheDocument(); 
     
     
     })     
})
