import { Flex, Box, Image, Badge, Text, Button } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { Modal } from '.'
import GetPatients from '../store/actions/patients/Get'
import Delete from '../store/actions/patients/Delete'

const Card = () => {
    const stateRole = useSelector(state => state.auth.role)
    const statePatients = useSelector(state => state.patients.patients)
    const dispatch = useDispatch()
    const handleFetch = () => {
        dispatch(GetPatients())
    }
    const handleDelete = (id) => {
        dispatch(Delete(id))
    }
    if(stateRole !== null) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => handleFetch(), [])
    }
    return (
        <>
            {statePatients.map(patient => {
                return (
                    <Box key={patient.id} p="4" maxWidth="320px" borderWidth="1px" borderRadius="md">
                        <Image borderRadius="md" src={patient.picture} />
                        <Flex align="baseline" mt={4}>
                            <Text
                                textTransform="uppercase"
                                fontSize="md"
                                fontWeight="bold"
                            >
                                {patient.full_name} &bull;
                         </Text>
                            <Badge ml={1} colorScheme="teal">{patient.age} years old</Badge>
                        </Flex>
                        <Text mt={4} fontSize="md">
                            <b>Maritual status:</b> {patient.maritual_status} <br />
                            <b>Gender:</b> {patient.gender} <br />
                            <b>Location:</b> {patient.location}
                        </Text>
                        {stateRole === 'Admin' && (
                            <Flex align="baseline" mt={4}>
                                <Modal />
                                <Button onClick={() => handleDelete(patient.id)} ml={2} size="sm" colorScheme="pink">Remove</Button>
                            </Flex>
                        )}
                    </Box>
                )
            })}
        </>
    )
}

export default Card
