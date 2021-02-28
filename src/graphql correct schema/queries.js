/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExtracurricular = `query getExtracurricular($id: String!) {
  getExtracurricular(id: $id) {
    id
    Club_Name
    Description
    Type
    Subjects
    Tags
    DailyCommitment
    WeeklyCommitment
    Weekdays
    AgeRestrictions
    Location
    Online
    TypeOfEmployment
    AcceptanceRate
    Cost
    Salary
    Seasonal_or_Annual
    ExpectedMajor
    ApplicationProcess
    Description_URL
  }
}
`;
export const listExtracurriculars = `query listExtracurriculars(
  $filter: ModelExtracurricularFilterInput
  $limit: Int
  $nextToken: String
) {
  listExtracurriculars(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Club_Name
      Description
      Type
      Subjects
      Tags
      DailyCommitment
      WeeklyCommitment
      Weekdays
      AgeRestrictions
      Location
      Online
      TypeOfEmployment
      AcceptanceRate
      Cost
      Salary
      Seasonal_or_Annual
      ExpectedMajor
      ApplicationProcess
      Description_URL
    }
    nextToken
  }
}
`;
