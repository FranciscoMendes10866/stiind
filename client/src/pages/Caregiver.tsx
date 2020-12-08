import { Container, SimpleGrid } from '@chakra-ui/react'

import { Card } from '../components'

const Caregiver = () => {
    return (
        <Container maxW="4xl">
            <SimpleGrid columns={3} spacing={8} my={8}>
                <Card />
            </SimpleGrid>
        </Container>
    )
}

export default Caregiver
