import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services/api";

import {
  ApiResponseComplete,
  PatientFullData,
  PatientGenders,
  NationalityList,
  Order,
  OrderByTypes,
} from "../interfaces/IPatient";

interface PatientProviderProps {
  children: ReactNode;
}

<<<<<<< HEAD
export interface PatientContextData {
  currentFilters: string;
  errorLoadingPatients: string | null;
  filteredPatientsList: PatientFullData[] | null;
  genderFilter: PatientGenders | null;
  lastFilters: string;
  loadingPatients: boolean;
  nameFilter: string;
  natFilter: NationalityList[];
  order: Order;
  orderBy: keyof OrderByTypes | null;
  patientsList: PatientFullData[] | null;
  defineTypeOfSorting: (type: keyof OrderByTypes) => void;
  handleChangeGenderFilter: (gender: PatientGenders | null) => void;
  handleChangeNameFilter: (name: string) => void;
  handleChangePatientQuantity: (quantity: number) => void;
  loadMorePatients: () => void;
  setNatFilter: React.Dispatch<React.SetStateAction<NationalityList[]>>;
=======
interface PatientContextData {
  patientsList: PatientFullData[] | null;
  filteredPatientsList: PatientFullData[] | null;
  currentFilters: string;
  lastFilters: string;
  loadingPatients: boolean;
  genderFilter: PatientGenders | null;
  natFilter: NationalityList[];
  errorLoadingPatients: string | null;
  nameFilter: string;
  order: Order;
  orderBy: keyof OrderByTypes | null;
  loadMorePatients: () => void;
  defineTypeOfSorting: (type: keyof OrderByTypes) => void;
  setNatFilter: React.Dispatch<React.SetStateAction<NationalityList[]>>;
  handleChangeNameFilter: (name: string) => void;
  handleChangeGenderFilter: (gender: PatientGenders | null) => void;
  handleChangePatientQuantity: (quantity: number) => void;
>>>>>>> b101de6cdb8918067fa419f9016d761aa1e10eaa
}

const PatientContext = createContext({} as PatientContextData);

function PatientProvider(props: PatientProviderProps) {
  const [patientsList, setPatientsList] = useState<PatientFullData[] | null>(
    null
  );

  const [loadingPatients, setLoadingPatients] = useState<boolean>(false);

  const [errorLoadingPatients, setErrorLoadingPatients] = useState<
    string | null
  >(null);

  const [filteredPatientsList, setFilteredPatientsList] = useState<
    PatientFullData[] | null
  >(null);

  const [page, setPage] = useState<number>(1);

  const [currentFilters, setCurrentFilters] = useState<string>("");

  const [lastFilters, setLastFilters] = useState<string>("");

  const [natFilter, setNatFilter] = useState<NationalityList[]>([]);

  const [genderFilter, setGenderFilter] = useState<PatientGenders | null>(null);

  const [nameFilter, setNameFilter] = useState<string>("");

  const [order, setOrder] = useState<Order>("asc");

  const [orderBy, setOrderBy] = useState<keyof OrderByTypes | null>(null);

  const [patientQuantity, setPatientQuantity] = useState<number>(50);

  const BASE_URL = `?results=${patientQuantity}`;

  function handleChangePatientQuantity(quantity: number) {
    setPatientQuantity(quantity);
  }

  function handleUrlToFetch(): string {
    let newUrlToFetch: string = `${BASE_URL}&page${page}`;

    if (currentFilters === lastFilters) {
      newUrlToFetch = `${BASE_URL}&page=${page}${currentFilters}`;
    } else {
      setPage(1);
      newUrlToFetch = `${BASE_URL}&page=1${currentFilters}`;
    }

    return newUrlToFetch;
  }

  async function fetchPatients(
    urlToFetch: string
  ): Promise<PatientFullData[] | null> {
    let results: PatientFullData[] | null = null;

    await api
      .get<ApiResponseComplete>(urlToFetch)
      .then((response) => {
        results = response.data.results;
      })
      .catch((error) => {
<<<<<<< HEAD
=======
        console.log(error);
>>>>>>> b101de6cdb8918067fa419f9016d761aa1e10eaa
        setErrorLoadingPatients(error);
      });

    return results;
  }

  async function loadMorePatients(): Promise<void> {
    setLoadingPatients(true);
    setErrorLoadingPatients(null);

    let urlToFetch: string = handleUrlToFetch();

    let apiPatients: PatientFullData[] | null = await fetchPatients(urlToFetch);
    let newPatientsArray: PatientFullData[] | null = apiPatients;

    if (apiPatients) {
      if (currentFilters === lastFilters) {
        newPatientsArray = patientsList
          ? [...patientsList, ...apiPatients]
          : [...apiPatients];
      }
      setPage(page + 1);
      setPatientsList(newPatientsArray);
      setLastFilters(currentFilters);
    }
    setLoadingPatients(false);
  }

  function defineTypeOfSorting(type: keyof OrderByTypes) {
    let isAsc = order === "asc" && (type === orderBy || null);
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(type);
  }

  function sortArrayByType(array: PatientFullData[]): PatientFullData[] {
    if (orderBy === "name") {
      if (order === "asc") {
        array.sort((a, b) =>
          a.name.first.normalize("NFD").replace(/[\u0300-\u036f]/g, "") >
          b.name.first.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            ? 1
<<<<<<< HEAD
            : b.name.first.normalize("NFD").replace(/[\u0300-\u036f]/g, "") >
              a.name.first.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
=======
            : b.name.last.normalize("NFD").replace(/[\u0300-\u036f]/g, "") >
              a.name.last.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
>>>>>>> b101de6cdb8918067fa419f9016d761aa1e10eaa
            ? -1
            : 0
        );
      } else {
        array.sort((a, b) =>
          a.name.first.normalize("NFD").replace(/[\u0300-\u036f]/g, "") <
          b.name.first.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            ? 1
<<<<<<< HEAD
            : b.name.first.normalize("NFD").replace(/[\u0300-\u036f]/g, "") <
              a.name.first.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
=======
            : b.name.last.normalize("NFD").replace(/[\u0300-\u036f]/g, "") <
              a.name.last.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
>>>>>>> b101de6cdb8918067fa419f9016d761aa1e10eaa
            ? -1
            : 0
        );
      }
    }

    if (orderBy === "gender") {
      if (order === "asc") {
        array.sort((a, b) =>
          a.gender > b.gender ? 1 : b.gender > a.gender ? -1 : 0
        );
      } else {
        array.sort((a, b) =>
          a.gender < b.gender ? 1 : b.gender < a.gender ? -1 : 0
        );
      }
    }

    if (orderBy === "dob") {
      if (order === "asc") {
        array.sort((a, b) =>
          a.dob.date > b.dob.date ? 1 : b.dob.date > a.dob.date ? -1 : 0
        );
      } else {
        array.sort((a, b) =>
          a.dob.date < b.dob.date ? 1 : b.dob.date < a.dob.date ? -1 : 0
        );
      }
    }

    return array;
  }

  function handleChangeNameFilter(name: string) {
    setNameFilter(name);
  }

  function handleChangeGenderFilter(gender: PatientGenders | null) {
    setGenderFilter(gender);
  }

  function filterByName(array: PatientFullData[]): PatientFullData[] {
    return array.filter((el) =>
      el.name.first.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }

  function filterPatientsList(): void {
    let tempArr: PatientFullData[] = patientsList ? [...patientsList] : [];

    tempArr = filterByName(tempArr);

    tempArr = sortArrayByType(tempArr);

    setFilteredPatientsList(tempArr);
  }

  function handleUrlFiltersQuery(): void {
    let newFilters: string = "";

    if (genderFilter) {
      newFilters = `${newFilters}&gender=${genderFilter}`;
    }

    if (natFilter && natFilter.length > 0) {
      let orderedNat = natFilter.sort((a, b) => {
        if (a < b) {
          return -1;
        } else {
          return 1;
        }
      });

      newFilters = `${newFilters}&nat=${orderedNat.join(",").toLowerCase()}`;
    }
    setCurrentFilters(newFilters);
  }

  useEffect(() => {
    handleUrlFiltersQuery();
  }, [genderFilter, natFilter]);

  useEffect(() => {
    filterPatientsList();
  }, [patientsList, nameFilter, order, orderBy]);

  useEffect(() => {
    loadMorePatients();
  }, []);

  return (
    <>
      <PatientContext.Provider
        value={{
          patientsList,
          filteredPatientsList,
          loadingPatients,
          nameFilter,
          genderFilter,
          natFilter,
          errorLoadingPatients,
          currentFilters,
          lastFilters,
          order,
          orderBy,
          loadMorePatients,
          defineTypeOfSorting,
          handleChangeGenderFilter,
          setNatFilter,
          handleChangeNameFilter,
          handleChangePatientQuantity,
        }}
      >
        {props.children}
      </PatientContext.Provider>
    </>
  );
}

function usePatientContext() {
  const context = useContext(PatientContext);

  if (!context) {
    throw new Error("Erro ao usar contexto de Pacientes (PatientContext)");
  }

  return context;
}

export { PatientContext, PatientProvider, usePatientContext };
