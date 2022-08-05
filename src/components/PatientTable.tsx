import { PatientFullData } from "../interfaces/IPatient";

import { usePatientContext } from "../contexts/usePatientsContext";

import { usePatientModal } from "../contexts/useModalPatients";

import { SortingButtonTable } from "./SortingButtonTable";
import { formatDate } from "../utils/common-functions";

export function PatientTable() {
  const { setPatient } = usePatientModal();

  const { filteredPatientsList } = usePatientContext();

  return (
    <div className='w-full h-[440px] bg-pharma-secondary rounded border border-solid border-pharma-border_disabled overflow-auto scrollbar-thumb-zinc-500 hover:scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'>
      <table
        aria-label='Tabela de pacientes'
        aria-labelledby='Tabela de pacientes'
        className='w-full border-collapse table-fixed bg-pharma-secondary'
      >
        <thead>
          <tr className='h-10 sticky top-0 bg-pharma-secondary border-b border-solid border-pharma-border_disabled'>
            <th align='center'>
              <SortingButtonTable name='Nome' type='name' />
            </th>

            <th align='center'>
              <SortingButtonTable name='Gênero' type='gender' />
            </th>

            <th align='center'>
              <SortingButtonTable name='Data de Nascimento' type='dob' />
            </th>

            <th align='center'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatientsList?.map((patient: PatientFullData, _) => {
            return (
              <tr
                key={patient.login.uuid}
                className='h-10 border-t border-solid border-pharma-border_disabled'
              >
                <td scope='row' className='pl-3'>
                  {patient.name.first} {patient.name.last}
                </td>
                <td align='center'>{patient.gender}</td>
                <td align='center'>{formatDate(patient.dob.date)}</td>
                <td align='center'>
                  <button
                    aria-label={`show ${patient.name.first} ${patient.name.last} details`}
                    name='Detalhes'
                    onClick={() => {
                      setPatient(patient);
                    }}
                    className='px-1 border border-solid border-pharma-enable rounded self-end bg-pharma-enabled text-pharma-primary hover:bg-pharma-hover'
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
}
