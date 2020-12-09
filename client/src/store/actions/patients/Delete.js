import { GraphQLClient, gql } from 'graphql-request'

const Delete = (id) => async (dispatch, getState) => {
    const stateToken = getState().auth.token
    const stateRole = getState().auth.role

    if (stateRole !== 'Admin') {
        console.log('You are not an admin.')
    }

    const baseURL = 'http://localhost:4000/graphql'
    const client = new GraphQLClient(baseURL)
    client.setHeader('authorization', `Bearer ${stateToken}`)

    const mutation = gql`
    mutation Delete($id: Float!) {
        Delete(data: { id: $id })
    }
    `
    const variables = {
        id: Number(id),
    }

    await client.request(mutation, variables)
        .then(() => {
            dispatch({
                type: 'DELETE_PATIENT',
                payload: id
            })
        })
        .catch(err => console.log(err))
}

export default Delete
