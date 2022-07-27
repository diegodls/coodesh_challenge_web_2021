//AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NO, NL, NZ, TR, US

export type NationalityList =
  | "AU"
  | "BR"
  | "CA"
  | "CH"
  | "DE"
  | "DK"
  | "ES"
  | "FI"
  | "FR"
  | "GB"
  | "IE"
  | "IR"
  | "NO"
  | "NL"
  | "NZ"
  | "TR"
  | "US";

export type PatientGenders = "female" | "male";

interface PatientName {
  title: string;
  first: string;
  last: string;
}

interface PatientLogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface PatientBirth {
  date: string;
  age: number;
}

interface PatientPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface PatientLocation {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string | number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

export interface PatientFullData {
  gender: string;
  name: PatientName;
  location: PatientLocation;
  email: string;
  login: PatientLogin;
  dob: PatientBirth;
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: PatientPicture;
  nat: NationalityList;
}

export interface ApiResponseComplete {
  results: PatientFullData[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export interface TableData {
  name: PatientName;
  gender: string;
  dob: PatientBirth;
  nat: NationalityList;
}

export type Order = "asc" | "desc";

export interface OrderByTypes {
  name: PatientName;
  gender: PatientGenders;
  dob: PatientBirth;
}
