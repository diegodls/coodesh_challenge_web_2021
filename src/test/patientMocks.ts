import { PatientModalContextData } from "../contexts/useModalPatients";
import { PatientContextData } from "../contexts/usePatientsContext";
import { ApiResponseComplete } from "../interfaces/IPatient";

export const patientContextMockValues: PatientContextData = {
  errorLoadingPatients: "",
  patientsList: null,
  filteredPatientsList: null,
  loadingPatients: false,
  nameFilter: "",
  genderFilter: null,
  natFilter: [],
  currentFilters: "",
  lastFilters: "",
  order: "asc",
  orderBy: null,
  loadMorePatients: jest.fn(),
  handleApplyFilters: jest.fn(),
  defineTypeOfSorting: jest.fn(),
  handleChangeGenderFilter: jest.fn(),
  setNatFilter: jest.fn(),
  handleChangeNameFilter: jest.fn(),
  handleChangePatientQuantity: jest.fn(),
};

export const modalContextMockValues: PatientModalContextData = {
  currentModalPatient: null,
  openPatientModal: false,
  setPatient: jest.fn(),
  handleClose: jest.fn(),
  setOpenPatientModal: jest.fn(),
};

export const patientListOnePageMock: ApiResponseComplete = {
  results: [
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Cecilia",
        last: "Wojcik",
      },
      location: {
        street: {
          number: 7468,
          name: "Hagaveien",
        },
        city: "Hauge",
        state: "Hordaland",
        country: "Norway",
        postcode: "5213",
        coordinates: {
          latitude: "52.8369",
          longitude: "107.6127",
        },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "cecilia.wojcik@example.com",
      login: {
        uuid: "2fdeb445-9ab5-4d5a-a9fa-55e7c008581b",
        username: "purplegoose386",
        password: "weird",
        salt: "QRwZwP5K",
        md5: "bdb2b09c3ce635ea6c2618fbcc68cb01",
        sha1: "eb73de15d5889c77dbd8a0224b4071a3a2a0cff9",
        sha256:
          "b4f6032521e19a935be77f775a3be669430214b561df3af1ea29b7e4f8471d93",
      },
      dob: {
        date: "1994-12-04T19:18:25.025Z",
        age: 28,
      },
      registered: {
        date: "2010-03-11T00:45:44.251Z",
        age: 12,
      },
      phone: "20535160",
      cell: "47306734",
      id: {
        name: "FN",
        value: "04129449042",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/74.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/74.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/74.jpg",
      },
      nat: "NO",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Daniel",
        last: "Zhang",
      },
      location: {
        street: {
          number: 9329,
          name: "Taieri Road",
        },
        city: "Greymouth",
        state: "Waikato",
        country: "New Zealand",
        postcode: 41813,
        coordinates: {
          latitude: "-85.6699",
          longitude: "-87.8798",
        },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz",
        },
      },
      email: "daniel.zhang@example.com",
      login: {
        uuid: "b509c56b-08d4-44f4-ad3d-535ca86863d3",
        username: "smallduck575",
        password: "clutch",
        salt: "muXPGzHy",
        md5: "614694a71cf5f19255570fc0b6528bd8",
        sha1: "2ec63249c1cda3630d737cd5a5445f2e8b917f31",
        sha256:
          "dbd87df75bfca10052bff87a521c213808aed87434bf7c994bbac502ec744133",
      },
      dob: {
        date: "1990-09-06T10:22:51.219Z",
        age: 32,
      },
      registered: {
        date: "2018-08-24T08:20:38.878Z",
        age: 4,
      },
      phone: "(537)-097-9907",
      cell: "(742)-737-3139",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/4.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/4.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/4.jpg",
      },
      nat: "NZ",
    },
    {
      gender: "male",
      name: {
        title: "Monsieur",
        first: "Finn",
        last: "Da Silva",
      },
      location: {
        street: {
          number: 547,
          name: "Rue du Village",
        },
        city: "Pregny-Chambésy",
        state: "Genève",
        country: "Switzerland",
        postcode: 8463,
        coordinates: {
          latitude: "-54.2545",
          longitude: "-118.9271",
        },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia",
        },
      },
      email: "finn.dasilva@example.com",
      login: {
        uuid: "9f93a88b-cb9d-4ac9-b923-668896639374",
        username: "blackgoose112",
        password: "goldie",
        salt: "90CP8BVr",
        md5: "8557fa562301df26dfe6365bdf6deb37",
        sha1: "d779e190fafd788f1bdbf88713ab8cc18b99f596",
        sha256:
          "c9cbe2d2abf24d2e175f11b3d8c0685bcfffcd89043d90c5433c84b044c0aea7",
      },
      dob: {
        date: "1965-07-19T11:06:52.230Z",
        age: 57,
      },
      registered: {
        date: "2013-02-21T20:49:20.057Z",
        age: 9,
      },
      phone: "076 907 94 99",
      cell: "077 724 47 87",
      id: {
        name: "AVS",
        value: "756.2583.1641.20",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/91.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/91.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
      },
      nat: "CH",
    },
    {
      gender: "male",
      name: {
        title: "Monsieur",
        first: "Finn",
        last: "Da Silva",
      },
      location: {
        street: {
          number: 547,
          name: "Rue du Village",
        },
        city: "Pregny-Chambésy",
        state: "Genève",
        country: "Switzerland",
        postcode: 8463,
        coordinates: {
          latitude: "-54.2545",
          longitude: "-118.9271",
        },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia",
        },
      },
      email: "finn.dasilva@example.com",
      login: {
        uuid: "9f93a88b-cb9d-4ac9-b923-668896639374",
        username: "blackgoose112",
        password: "goldie",
        salt: "90CP8BVr",
        md5: "8557fa562301df26dfe6365bdf6deb37",
        sha1: "d779e190fafd788f1bdbf88713ab8cc18b99f596",
        sha256:
          "c9cbe2d2abf24d2e175f11b3d8c0685bcfffcd89043d90c5433c84b044c0aea7",
      },
      dob: {
        date: "1965-07-19T11:06:52.230Z",
        age: 57,
      },
      registered: {
        date: "2013-02-21T20:49:20.057Z",
        age: 9,
      },
      phone: "076 907 94 99",
      cell: "077 724 47 87",
      id: {
        name: "AVS",
        value: "756.2583.1641.20",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/91.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/91.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
      },
      nat: "CH",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Noah",
        last: "Wood",
      },
      location: {
        street: {
          number: 8578,
          name: "Lincoln Road",
        },
        city: "Taupo",
        state: "Gisborne",
        country: "New Zealand",
        postcode: 42434,
        coordinates: {
          latitude: "32.4898",
          longitude: "13.3336",
        },
        timezone: {
          offset: "-9:00",
          description: "Alaska",
        },
      },
      email: "noah.wood@example.com",
      login: {
        uuid: "3142f0da-46ff-47af-bc46-25069ed5e0bf",
        username: "goldenbear791",
        password: "jonathan",
        salt: "v0I8MemL",
        md5: "ec397101d5a4d874e036c7d30d82543d",
        sha1: "98018abf91f0e504c925cfa80b230f46d134a31e",
        sha256:
          "0472ff75ec029ca81132d77e2e83f67d4d9a8c9a538e4534606b29ded90ca79d",
      },
      dob: {
        date: "1992-02-24T01:33:06.978Z",
        age: 30,
      },
      registered: {
        date: "2004-10-22T15:18:03.537Z",
        age: 18,
      },
      phone: "(193)-511-9786",
      cell: "(628)-099-6585",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/11.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
      },
      nat: "NZ",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Isabelle",
        last: "Johnston",
      },
      location: {
        street: {
          number: 9812,
          name: "O'Connell Avenue",
        },
        city: "Lusk",
        state: "Kildare",
        country: "Ireland",
        postcode: 90832,
        coordinates: {
          latitude: "-15.5166",
          longitude: "159.9887",
        },
        timezone: {
          offset: "+4:30",
          description: "Kabul",
        },
      },
      email: "isabelle.johnston@example.com",
      login: {
        uuid: "e8b367ce-b48d-452a-a241-d4ce2d7b355f",
        username: "greenduck820",
        password: "kristian",
        salt: "rsGOLlFU",
        md5: "ec1710477602a9c4407d57a7b01a76e4",
        sha1: "470cc4e36af3398ed8c75620b0e7f131883c25ba",
        sha256:
          "2a29537a9ffcbfac357760b6874e5b49ed5571c64bfa0732d51462e71a937872",
      },
      dob: {
        date: "1977-03-19T02:22:45.881Z",
        age: 45,
      },
      registered: {
        date: "2016-03-09T13:03:29.328Z",
        age: 6,
      },
      phone: "031-623-0110",
      cell: "081-267-3492",
      id: {
        name: "PPS",
        value: "3413512T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/74.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/74.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/74.jpg",
      },
      nat: "IE",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Alexis",
        last: "Hawkins",
      },
      location: {
        street: {
          number: 1379,
          name: "Camden Ave",
        },
        city: "Waco",
        state: "Georgia",
        country: "United States",
        postcode: 39636,
        coordinates: {
          latitude: "9.9054",
          longitude: "163.2596",
        },
        timezone: {
          offset: "-12:00",
          description: "Eniwetok, Kwajalein",
        },
      },
      email: "alexis.hawkins@example.com",
      login: {
        uuid: "9139750c-e212-4f48-a1fc-e9a4d0efb8e9",
        username: "heavysnake810",
        password: "rusty2",
        salt: "aMVXtR16",
        md5: "ef0f41143d2b19b998ab3211fdcd94d4",
        sha1: "015c900677d7168015b7ace551c94f9856e694cd",
        sha256:
          "b84f2351aa209c3d19ed58afe838a1f4acf3e10ceea40ec5fbf8cbf3e664692c",
      },
      dob: {
        date: "1992-04-05T13:30:59.181Z",
        age: 30,
      },
      registered: {
        date: "2014-08-13T03:06:13.154Z",
        age: 8,
      },
      phone: "(787)-967-8094",
      cell: "(206)-214-6706",
      id: {
        name: "SSN",
        value: "057-88-4639",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/32.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/32.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
      },
      nat: "US",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Ömür",
        last: "Nobioğlu",
      },
      location: {
        street: {
          number: 7769,
          name: "Talak Göktepe Cd",
        },
        city: "Siirt",
        state: "Isparta",
        country: "Turkey",
        postcode: 85641,
        coordinates: {
          latitude: "-88.8302",
          longitude: "-97.7073",
        },
        timezone: {
          offset: "-2:00",
          description: "Mid-Atlantic",
        },
      },
      email: "omur.nebioglu@example.com",
      login: {
        uuid: "9c67f366-1582-43fe-8670-21f2509cc5bd",
        username: "crazypanda951",
        password: "butterfl",
        salt: "0Ozoc2Ad",
        md5: "740b59807feca0d4e8c4465e81eed9ba",
        sha1: "0e1c06fdd3462987dfbd30934731210107ce19f4",
        sha256:
          "f1231be963730702bdbb6fa4b8489eb7c743e98005ff42032b7bde2eec38a6d1",
      },
      dob: {
        date: "1994-08-01T06:21:33.461Z",
        age: 28,
      },
      registered: {
        date: "2005-02-08T11:56:34.191Z",
        age: 17,
      },
      phone: "(847)-559-7245",
      cell: "(165)-587-2622",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/22.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
      },
      nat: "TR",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Ömür",
        last: "Nebioğlu",
      },
      location: {
        street: {
          number: 7769,
          name: "Talak Göktepe Cd",
        },
        city: "Siirt",
        state: "Isparta",
        country: "Turkey",
        postcode: 85641,
        coordinates: {
          latitude: "-88.8302",
          longitude: "-97.7073",
        },
        timezone: {
          offset: "-2:00",
          description: "Mid-Atlantic",
        },
      },
      email: "omur.nebioglu@example.com",
      login: {
        uuid: "9c67f366-1582-43fe-8670-21f2509cc5bd",
        username: "crazypanda951",
        password: "butterfl",
        salt: "0Ozoc2Ad",
        md5: "740b59807feca0d4e8c4465e81eed9ba",
        sha1: "0e1c06fdd3462987dfbd30934731210107ce19f4",
        sha256:
          "f1231be963730702bdbb6fa4b8489eb7c743e98005ff42032b7bde2eec38a6d1",
      },
      dob: {
        date: "1994-08-01T06:21:33.461Z",
        age: 28,
      },
      registered: {
        date: "2005-02-08T11:56:34.191Z",
        age: 17,
      },
      phone: "(847)-559-7245",
      cell: "(165)-587-2622",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/22.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
      },
      nat: "TR",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Ömür",
        last: "Nibioğlu",
      },
      location: {
        street: {
          number: 7769,
          name: "Talak Göktepe Cd",
        },
        city: "Siirt",
        state: "Isparta",
        country: "Turkey",
        postcode: 85641,
        coordinates: {
          latitude: "-88.8302",
          longitude: "-97.7073",
        },
        timezone: {
          offset: "-2:00",
          description: "Mid-Atlantic",
        },
      },
      email: "omur.nebioglu@example.com",
      login: {
        uuid: "9c67f366-1582-43fe-8670-21f2509cc5bd",
        username: "crazypanda951",
        password: "butterfl",
        salt: "0Ozoc2Ad",
        md5: "740b59807feca0d4e8c4465e81eed9ba",
        sha1: "0e1c06fdd3462987dfbd30934731210107ce19f4",
        sha256:
          "f1231be963730702bdbb6fa4b8489eb7c743e98005ff42032b7bde2eec38a6d1",
      },
      dob: {
        date: "1994-08-01T06:21:33.461Z",
        age: 28,
      },
      registered: {
        date: "2005-02-08T11:56:34.191Z",
        age: 17,
      },
      phone: "(847)-559-7245",
      cell: "(165)-587-2622",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/22.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
      },
      nat: "TR",
    },
  ],
  info: {
    seed: "1881cd75ad79a481",
    results: 10,
    page: 1,
    version: "1.3",
  },
};
