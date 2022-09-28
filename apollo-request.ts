import { gql } from '@apollo/client';

export const GET_MY_PROFILE_QUERY = gql`
  query getMyProfile {
    getMyProfileResult @rest(path: "my-profile") {
      status
      data
    }
  }
`;

export const FORGOT_PASSWORD_MUTATION = gql`
  mutation forgotPassword($email: String!, $returnUrl: String!) {
    forgotPasswordResult(input: { email: $email, returnUrl: $returnUrl })
      @rest(method: "POST", path: "forgot-password") {
      status
      message
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    loginResult(input: { email: $email, password: $password })
      @rest(method: "POST", path: "login") {
      status
      message
      token
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation register(
    $name: String!
    $email: String!
    $password: String!
    $returnUrl: String!
  ) {
    registerResult(
      input: {
        name: $name
        email: $email
        password: $password
        returnUrl: $returnUrl
      }
    ) @rest(method: "POST", path: "register") {
      status
      message
      token
    }
  }
`;

export const UPDATE_PROFILE_MUTATION = gql`
  mutation updateProfile($name: String!, $password: String!, $token: String!) {
    updateProfileResult(
      input: { name: $name, password: $password, token: $token }
    ) @rest(method: "PUT", path: "my-profile") {
      status
      message
      errors
    }
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
  mutation resetPassword($token: String!, $email: String!, $password: String!) {
    resetPasswordResult(
      input: { token: $token, email: $email, password: $password }
    ) @rest(method: "PUT", path: "reset-password") {
      status
      message
      errors
    }
  }
`;
