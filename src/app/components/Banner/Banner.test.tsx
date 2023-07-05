import {render, screen} from '@testing-library/react';
import Banner from './Banner';



describe('<Banner/>', () => {
    it('renders an image', () => {
        render(<Banner/>)
        const displayImage = document.querySelector("img") as HTMLImageElement;
        expect(displayImage.alt).toContain("banner-image");
      })

    //   it('display the canva generated banner', () => {
    //     render(<Banner/>);
    //     const boxElement = screen.getAllByText(/image tag/i);
    //     expect(boxElement).toBeInTheDocument();
    // })
})