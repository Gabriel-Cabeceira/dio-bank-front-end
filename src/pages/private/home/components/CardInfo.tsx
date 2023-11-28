import { Box } from "@chakra-ui/react"
import { CardInfoContainer, Paragraphs } from "./cardinfo-styles"


interface IBox {
    firstText: string,
    secondText?: string
}

export const CardInfo: React.FC<IBox> = ({ firstText, secondText }) => {


    return(

        <Box className="box"  height='8em' backgroundColor='#FFFFFF' padding='1em' borderRadius='12px'>
            <CardInfoContainer>
                <Paragraphs>{firstText}</Paragraphs>
                <Paragraphs>{secondText}</Paragraphs>
            </CardInfoContainer>

        </Box>
    )
} 