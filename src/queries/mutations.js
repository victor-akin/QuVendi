import { gql } from "apollo-boost";

export const SIGNUP_MUTATION = gql`
  mutation signup($lastname: String!, $firstname: String!, $email: String!, $phone_no: String!, $password: String!){
    signup(lastname: $lastname, firstname: $firstname, email: $email, phone_no: $phone_no, password: $password){
      lastname
      firstname
      email
    }
  }
`;

// input LoginInput {
//   username: String ==> email
//   password: String
// }

export const LOGIN_MUTATION = gql`
 mutation login($data: LoginInput) {
    login(data: $data) {
      expires_in
      token_type
      access_token  
      refresh_token
      user{
        lastname
        firstname
        email
        user_uid
      }
    }
  }
`;

