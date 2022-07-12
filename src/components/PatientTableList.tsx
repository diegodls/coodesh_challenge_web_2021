import { OrderByTypes, PatientFullData } from "../interfaces/IPatient";

import { usePatientContext } from "../contexts/usePatientsContext";

import { usePatientModal } from "../contexts/useModalPatients";

import { SortingButtonTable } from "./SortingButtonTable";

const PatientTableList = () => {
  const { setPatient } = usePatientModal();

  const { filteredPatientsList, order, orderBy, defineTypeOfSorting } =
    usePatientContext();

  function setTypeOfSorting(type: keyof OrderByTypes) {
    defineTypeOfSorting(type);
  }

  function viewPatientDetails(patient: PatientFullData): void {
    setPatient(patient);
  }

  function formatDate(date: string): string {
    let tempDate: Date = new Date(date);

    let stringDay: string =
      tempDate.getDate() < 10
        ? `0${tempDate.getDate()}`
        : `${tempDate.getDate()}`;

    let stringMonth: string =
      tempDate.getMonth() + 1 < 10
        ? `0${tempDate.getMonth() + 1}`
        : `${tempDate.getMonth() + 1}`;

    let stringYear: string = String(tempDate.getFullYear());

    return `${stringDay}/${stringMonth}/${stringYear}`;
  }

  return (
    <table
      aria-label='Tabela de pacientes'
      aria-labelledby='Tabela de pacientes'
      className='w-full border-collapse table-fixed'
    >
      <thead>
        <tr className='h-10'>
          <th
            align='center'
            className='sticky top-0 bg-pharma-border_disabled '
          >
            <SortingButtonTable
              name='Nome'
              type='name'
              order={order}
              orderBy={orderBy}
              setTypeOfSorting={setTypeOfSorting}
            />
          </th>
          <th
            align='center'
            className='sticky top-0  bg-pharma-border_disabled '
          >
            <SortingButtonTable
              name='Gênero'
              type='gender'
              order={order}
              orderBy={orderBy}
              setTypeOfSorting={setTypeOfSorting}
            />
          </th>

          <th
            align='center'
            className='sticky top-0  bg-pharma-border_disabled '
          >
            <SortingButtonTable
              name='Data de Nascimento'
              type='dob'
              order={order}
              orderBy={orderBy}
              setTypeOfSorting={setTypeOfSorting}
            />
          </th>

          <th
            align='center'
            className='sticky top-0 bg-pharma-border_disabled '
          >
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredPatientsList?.map((patient: PatientFullData, index) => {
          const labelId = `enhanced-table-checkdiv-${index}`;
          return (
            <tr
              role='checkdiv'
              tabIndex={-1}
              key={patient.login.uuid}
              className='h-10 border-t border-solid border-pharma-border_enable'
            >
              <td id={labelId} scope='row'>
                {patient.name.first} {patient.name.last} - {patient.nat}
              </td>
              <td align='center'>{patient.gender}</td>
              <td align='center'>{formatDate(patient.dob.date)}</td>
              <td align='center'>
                <button
                  aria-label={`show ${patient.name.first} ${patient.name.last} details`}
                  name='Detalhes'
                  onClick={() => {
                    viewPatientDetails(patient);
                  }}
                >
                  Detalhes
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PatientTableList;
