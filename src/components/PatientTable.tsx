import { OrderByTypes, PatientFullData } from "../interfaces/IPatient";

import { usePatientContext } from "../contexts/usePatientsContext";

import { usePatientModal } from "../contexts/useModalPatients";

import { SortingButtonTable } from "./SortingButtonTable";
import { formatDate } from "../utils/common-functions";

export const PatientTable = () => {
  const { setPatient } = usePatientModal();

  const { filteredPatientsList } = usePatientContext();

  function viewPatientDetails(patient: PatientFullData): void {
    setPatient(patient);
  }

  return (
    <div className='w-full h-[440px] rounded border border-solid border-pharma-border_enable overflow-auto scrollbar-thumb-zinc-500 hover:scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'>
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
              <SortingButtonTable name='Nome' type='name' />
            </th>
            <th
              align='center'
              className='sticky top-0  bg-pharma-border_disabled '
            >
              <SortingButtonTable name='Gênero' type='gender' />
            </th>

            <th
              align='center'
              className='sticky top-0  bg-pharma-border_disabled '
            >
              <SortingButtonTable name='Data de Nascimento' type='dob' />
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
    </div>
  );
};
