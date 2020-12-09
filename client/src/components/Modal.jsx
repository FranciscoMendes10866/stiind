import {
    Stack,
    Flex,
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Select,
    FormLabel,
    Input
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Update from '../store/actions/patients/Update'

const ModalComponent = ({ patient }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        firstName: patient.first_name,
        lastName: patient.last_name,
        picture: patient.picture,
        age: patient.age,
        location: patient.location,
        gender: patient.gender,
        maritualStatus: patient.maritual_status,
        relative: patient.relative_id,
        caregiver: patient.caregiver_id
    })
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }
    const handleOnSumit = (e) => {
        e.preventDefault()
        const formData = {
        id: patient.id,
        firstName: form.firstName,
        lastName: form.lastName,
        picture: form.picture,
        age: form.age,
        location: form.location,
        gender: form.gender,
        maritualStatus: form.maritualStatus,
        relative: form.relative,
        caregiver: form.caregiver
        }
        dispatch(Update(formData))
        setForm({
            firstName: '',
            lastName: '',
            picture: '',
            age: '',
            location: '',
            gender: '',
            maritualStatus: '',
            relative: '',
            caregiver: ''
        })
        onClose()
    }
    return (
        <Box>
            <Button colorScheme="teal" size="sm" onClick={onOpen}>Edit</Button>
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit a single elderly person</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={4}>
                        <Flex justify="space-between" align="center">
                            <Box>
                                <Stack spacing="10px">
                                    <FormLabel htmlFor="firstName">First name</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        value={form.firstName}
                                        id="firstName"
                                        type="text"
                                        placeholder="Enter the first name of the elderly"
                                    />
                                    <FormLabel htmlFor="lastName">Last name</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        value={form.lastName}
                                        id="lastName"
                                        type="text"
                                        placeholder="Enter the last name of the elderly"
                                    />
                                    <FormLabel htmlFor="age">Age</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        value={form.age}
                                        id="age"
                                        type="number"
                                        placeholder="Enter the age of the elderly"
                                    />
                                    <FormLabel htmlFor="location">Location</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        value={form.location}
                                        id="location"
                                        type="text"
                                        placeholder="Enter the location of the elderly"
                                    />
                                </Stack>
                            </Box>
                            <Box>
                                <Stack spacing="10px">
                                    <FormLabel htmlFor="gender">Gender</FormLabel>
                                    <Select value={form.gender} onChange={handleOnChange} id="gender" placeholder="Select the gender">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Select>
                                    <FormLabel htmlFor="maritualStatus">Maritual Status</FormLabel>
                                    <Select value={form.maritualStatus} onChange={handleOnChange} id="maritualStatus" placeholder="Select the marital status">
                                        <option>Widower/ed</option>
                                        <option>Single</option>
                                        <option>Married</option>
                                    </Select>
                                    <FormLabel htmlFor="relative">Relative</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        value={form.relative}
                                        id="relative"
                                        type="text"
                                        placeholder="Enter the relative id"
                                    />
                                    <FormLabel htmlFor="caregiver">Caregiver</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        value={form.caregiver}
                                        id="caregiver"
                                        type="text"
                                        placeholder="Enter the caregiver id"
                                    />
                                </Stack>
                            </Box>
                        </Flex>
                        <Flex justify="flex-start" align="center" mt={3}>
                            <Box>
                                <FormLabel htmlFor="picture">Picture</FormLabel>
                                <Input
                                    onChange={handleOnChange}
                                    value={form.picture}
                                    id="picture"
                                    type="url"
                                    placeholder="Enter the picture of the elderly"
                                />
                            </Box>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" colorScheme="teal" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={handleOnSumit} colorScheme="teal">Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default ModalComponent
