import { gql } from "@apollo/client";

export const send_current = gql`
  mutation addCurrentVisit(
    $countryCode: String
    $ipAddress: String
    $userAgent: String
  ) {
    addCurrentVisit(
      countryCode: $countryCode
      ipAddress: $ipAddress
      userAgent: $userAgent
    ) {
      message
    }
  }
`;
