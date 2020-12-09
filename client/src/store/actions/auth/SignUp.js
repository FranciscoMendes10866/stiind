import { request, gql } from 'graphql-request'

const SignUp = (formData, history) => async (dispatch) => {
  const baseURL = 'http://localhost:4000/graphql'
  const mutation = gql`
    mutation Register(
        $first_name: String!,
        $last_name: String!,
        $email: String!,
        $password: String!,
        $role: String!
      ) { register(data: { 
          first_name: $first_name, 
          last_name: $last_name,
          email: $email,
          password: $password,
          role: $role,
      }) {
        token
        name
        role
      }
    }
  `
  const variables = {
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    password: formData.password,
    role: formData.role,
  }
  await request(baseURL, mutation, variables)
    .then(({ register }) => {
      dispatch({
        type: 'SIGN_UP',
        payload: register
      })
      if (register.role === 'Admin') {
        history.push('/admin')
      } else if (register.role === 'Caregiver') {
        history.push('/caregiver')
      } else {
        history.push('/relative')
      }
    })
    .catch((err) => console.log(err))
}

export default SignUp
