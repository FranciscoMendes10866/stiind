import { GraphQLClient, gql } from 'graphql-request'

const CreatePatient = (formData) => async (dispatch, getState) => {
    const stateToken = getState().auth.token
    const stateRole = getState().auth.role

    if (stateRole !== 'Admin') {
        console.log('You are not an admin.')
    } else if (stateToken === null) {
        console.log('You should be logged in.')
    }

    const baseURL = 'http://localhost:4000/graphql'
    const client = new GraphQLClient(baseURL)
    client.setHeader('authorization', `Bearer ${stateToken}`)

    const mutation = gql`
    mutation CreatePatient(
        $first_name: String!,
        $last_name: String!,
        $age: Float!,
        $gender: String!,
        $maritual_status: String!,
        $location: String!,
        $picture: String!,
        $relative_id: Float!,
        $caregiver_id: Float!,
      ) { CreatePatient(data: { 
          first_name: $first_name,
          last_name: $last_name,
          age: $age,
          gender: $gender,
          maritual_status: $maritual_status,
          location: $location,
          picture: $picture,
          relative_id: $relative_id,
          caregiver_id: $caregiver_id,
      }) {
        id
        full_name
        age
        gender
        maritual_status
        location
        picture
      }
    }
  `

    const variables = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        age: Number(formData.age),
        gender: formData.gender,
        location: formData.location,
        maritual_status: formData.maritualStatus,
        picture: formData.picture,
        relative_id: Number(formData.relative),
        caregiver_id: Number(formData.caregiver),
    }

    await client.request(mutation, variables)
        .then(({ CreatePatient }) => {
            dispatch({
                type: 'CREATE_PATIENT',
                payload: CreatePatient
            })
        })
        .catch(err => console.log(err))
}

export default CreatePatient
