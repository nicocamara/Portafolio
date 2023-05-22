export type User = {
  uid: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type Portfolio = {
  id: string;
  overview: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  address: {
    street: string;
    houseNumber: string;
    zipCode: string;
    country: string;
    city: string;
  };
  job: Job[];
  education: Education[];
};

export type Education = Experence & {
  institution: string;
};

export type Job = Experence & {
  skills: string[];
};

type Experence = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
};
