import { request, gql } from 'graphql-request'

const SignIn = (formData, history) => async (dispatch) => {
  const baseURL = 'http://localhost:4000/graphql'
  const mutation = gql`
    mutation Login(
        $email: String!,
        $password: String!,
      ) { login(data: { 
          email: $email,
          password: $password,
      }) {
        token
        name
        role
      }
    }
  `
  const variables = {
    email: formData.email,
    password: formData.password,
  }
  await request(baseURL, mutation, variables)
    .then(({ login }) => {
      dispatch({
        type: 'SIGN_IN',
        payload: login
      })
      if (login.role === 'Admin') {
        history.push('/admin')
      } else if (login.role === 'Caregiver') {
        history.push('/caregiver')
      } else {
        history.push('/relative')
      }
    })
    .catch((err) => console.log(err))
}

export default SignIn
