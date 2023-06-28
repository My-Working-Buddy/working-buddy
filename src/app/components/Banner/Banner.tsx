import React from 'react';
import mwbCanva from '../../../assets/mwb-canva.png';
import {Box} from '@chakra-ui/react'
const Banner= () => {
    return (
        <div>
            <Box>
                <img src={mwbCanva} alt='This is the banner section' />
            </Box>
        </div>
    )
}

export default Banner;  