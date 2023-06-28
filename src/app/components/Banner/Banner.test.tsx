import {render, screen} from '@testing-library/react';
import Banner from './Banner';

it('display the canva generated banner', () => {
    render(<Banner/>);
    const boxElement = screen.getAllByText(/image tag/i);
    expect(boxElement).toBeInTheDocument();
})