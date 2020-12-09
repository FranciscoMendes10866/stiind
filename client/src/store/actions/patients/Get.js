import { GraphQLClient, gql } from 'graphql-request'

const GetPatient = () => async (dispatch, getState) => {
    const stateToken = getState().auth.token

    const baseURL = 'http://localhost:4000/graphql'
    const client = new GraphQLClient(baseURL)
    client.setHeader('authorization', `Bearer ${stateToken}`)

    const query = gql`
    query {
        FindAll {
            id
            first_name
            last_name
            age
            gender
            maritual_status
            location
            picture
            relative_id
            caregiver_id
        }
    }
  `

    await client.request(query)
        .then(({ FindAll }) => {
            dispatch({
                type: 'GET_PATIENTS',
                payload: FindAll
            })
        })
        .catch(err => console.log(err))
}

export default GetPatient
