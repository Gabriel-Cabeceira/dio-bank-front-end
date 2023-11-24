import React from "react";
import { Header } from "./Header/Header";
import * as styledColors from '../../general-styles'
import { Box } from '@chakra-ui/react';


interface ILayout {
    children: any;
}

export const Layout: React.FC<ILayout> = ({ children }: any) => {
    return (
        <Box className='boxContainer' minHeight='100vh' backgroundColor={styledColors.mainColor}>
            <Header />
            { children }
        </Box>

    )
}