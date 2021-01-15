import React from 'react'
import {Icon, Box, Heading, Flex, Text, Spacer} from '@chakra-ui/react'
import { HiDotsHorizontal } from "react-icons/hi";

const CardHeader = ({ icon, title, value, bgColor, color }) => {
    return (
        <Box p={4}>
            <Flex>
                <Box bgColor={bgColor} p='5px' borderRadius='3px' mr={{ md: '10px'}}>
                    <Icon as={icon} color='white'/>
                </Box>
                <Box>
                    <Heading fontSize={{ md:'15px'}}>{title}</Heading>
                    <Text fontSize={{ md:'11px'}} color={color}>{value}</Text>
                
                </Box>
                <Spacer />
                <Icon as={HiDotsHorizontal} mt={3} />
            </Flex>
        </Box>
    )
}

export default CardHeader
