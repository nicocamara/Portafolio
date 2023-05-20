export type User = {
  uid: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type Portfolio = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  currentPosition: string;
  city: string;
  descritionJob: string;
};

// export type Portfolio = {
//   id: string;
//   overview: {
//     firstName: string;
//     lastName: string;
//     email: string;
//     phone: string;
//   };
//   address: {
//     street: string;
//     houseNumber: string;
//     zipCode: string;
//     country: string;
//     city: string;
//   };
//   education: {
//     institution: string;
//     carrer: string;
//     startDate: string;
//     endDate: string;
//     description: string;
//   };
//   job: {
//     currentPosition: string;
//     descritionJob: string;
//     skills: string;
//     startDate: string;
//     endDate: string;
//   };
// };
