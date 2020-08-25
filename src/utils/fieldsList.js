export const personInformationFields = [
  {
    name: "firstName",
    inputType: "text",
    label: "Name",
  },
  {
    name: "lastName",
    inputType: "text",
    label: "LastName",
  },
  {
    name: "age",
    inputType: "number",
    label: "Age",
  },
  {
    name: "address",
    inputType: "text",
    label: "Address",
  },
];

export const courseInformationFields = [
  {
    name: "name",
    inputType: "text",
    label: "Name",
  },
  {
    name: "teacherId",
    fieldType: "select",
    label: "Teacher",
  },
  {
    name: "year",
    fieldType: "date",
    label: "Year",
  },
];

export const courseFields = [
  {
    name: "name",
    inputType: "text",
    label: "Name",
  },
  {
    name: "teacher_id",
    fieldType: "select",
    label: "Assign to a Teacher",
  },
];

export const initialState = {
  firstName: "",
  lastName: "",
  age: 0,
  address: "",
};
