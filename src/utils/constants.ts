import { PatientFullData } from "../interfaces/IPatient";

export const API_PATIENT_QUANTITY: number = 10;
export const TIMEOUT_INTERVAL_ACTION: number = 1000; // milliseconds
export const TIMEOUT_INTERVAL_WAIT: number = 2000; // milliseconds
export const mockFirstPatient: PatientFullData = {
  gender: "female",
  name: {
    title: "Mrs",
    first: "Ceylan",
    last: "Akışık",
  },
  location: {
    street: {
      number: 1895,
      name: "Vatan Cd",
    },
    city: "Iğdır",
    state: "Mardin",
    country: "Turkey",
    postcode: 81122,
    coordinates: {
      latitude: "71.9432",
      longitude: "6.1886",
    },
    timezone: {
      offset: "-7:00",
      description: "Mountain Time (US & Canada)",
    },
  },
  email: "ceylan.akisik@example.com",
  login: {
    uuid: "31623ff9-c21e-4d31-a64e-e27a2371a8a0",
    username: "whitetiger226",
    password: "digger",
    salt: "ie63nhPx",
    md5: "60e978db7f41f2e78d2096d6bb9cf02c",
    sha1: "fc86aeb6bbccbf307803413452632b1db7a13099",
    sha256: "8e9cb9faf0beeca2f7081ae4aeb49a77aa50046a4075e236445058aa40bb5827",
  },
  dob: {
    date: "1969-12-22T04:52:26.833Z",
    age: 53,
  },
  registered: {
    date: "2013-06-30T03:54:28.294Z",
    age: 9,
  },
  phone: "(240)-656-0230",
  cell: "(470)-537-6449",
  id: {
    name: "",
    value: null,
  },
  picture: {
    large: "https://randomuser.me/api/portraits/women/15.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/15.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/15.jpg",
  },
  nat: "TR",
};
export const mockSecondPatient: PatientFullData = {
  gender: "male",
  name: {
    title: "Mr",
    first: "Mille",
    last: "Jensen",
  },
  location: {
    street: {
      number: 4780,
      name: "Skovkanten",
    },
    city: "Viby Sj.",
    state: "Nordjylland",
    country: "Denmark",
    postcode: 48027,
    coordinates: {
      latitude: "-28.7305",
      longitude: "-66.4154",
    },
    timezone: {
      offset: "+5:45",
      description: "Kathmandu",
    },
  },
  email: "mille.jensen@example.com",
  login: {
    uuid: "a3c7bf86-6485-4f49-aa21-93ae840bb68e",
    username: "blackbutterfly657",
    password: "murder",
    salt: "ArGv9rI4",
    md5: "ae446d4ae421e005a46e3af2341542ab",
    sha1: "0b9944bfe6fbe9e05f3188a6c0549d7f2cd23bb1",
    sha256: "5a5ecefae12a5dbd71d647fc77218573f92ca59f43098ab067c64b2cf173c8cf",
  },
  dob: {
    date: "1955-08-25T22:49:40.669Z",
    age: 67,
  },
  registered: {
    date: "2013-03-02T17:34:45.544Z",
    age: 9,
  },
  phone: "53077359",
  cell: "32372817",
  id: {
    name: "CPR",
    value: "250855-1581",
  },
  picture: {
    large: "https://randomuser.me/api/portraits/men/90.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/90.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/90.jpg",
  },
  nat: "DK",
};
