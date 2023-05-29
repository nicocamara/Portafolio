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
    country: string;
    street: string;
    city: string;
    birthDate: string;
  };
  skills: Skills[];
  job: Job[];
  education: Education[];
};

export type Skills = {
  workSkills: string;
  softSkills: string;
  teachSkills: string;
  coverLetter: string;
};

export type Education = Experence & {
  institution: string;
};

export type Job = Experence & {
  employer: string;
};

type Experence = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  actuality: boolean;
};
