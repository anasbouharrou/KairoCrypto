import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Stack, HStack, VStack ,StackDivider} from "@chakra-ui/react"
  
const Faq = () => {
    return(
        <div className="faq">
            <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch">
            <Box h="40px">
                Is Our Website Safe For Use  Is Our Website Safe For Use ?? 
            </Box>
            <Box h="40px">
                Is Our Website Safe For Use  Is Our Website Safe For Use ?? 
            </Box>
            <Box h="40px">
                Is Our Website Safe For Use  Is Our Website Safe For Use ?? 
            </Box>
            </VStack>
        </div>
    )
}

export default Faq;