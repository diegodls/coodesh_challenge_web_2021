import { ArrowClockwise, CircleNotch } from "phosphor-react";
import { PatientFullData } from "../interfaces/IPatient";

import { usePatientContext } from "../contexts/usePatientsContext";

import { usePatientModal } from "../contexts/useModalPatients";

import LoadingPatients from "./LoadingPatients";
import { SortingButtonTable } from "./SortingButtonTable";

interface OrderByTypes {
  name: string;
  gender: string;
  dob: string;
}

export const PatientTableArea = () => {
  const { setPatient } = usePatientModal();

  const {
    filteredPatientsList,
    errorLoadingPatients,
    loadingPatients,
    order,
    orderBy,
    loadMorePatients,
    defineTypeOfSorting,
  } = usePatientContext();

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
    <div className='w-full flex flex-col items-center justify-center mt-1 '>
      <div className='w-full h-[450px] flex flex-col items-center justify-center'>
        {loadingPatients ? (
          <LoadingPatients />
        ) : (
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

                  <td
                    align='center'
                    className='sticky top-0  bg-pharma-border_disabled '
                  >
                    Ações
                  </td>
                </tr>
              </thead>
              <tbody>
                {filteredPatientsList?.map(
                  (patient: PatientFullData, index) => {
                    const labelId = `enhanced-table-checkdiv-${index}`;
                    return (
                      <tr
                        role='checkdiv'
                        tabIndex={-1}
                        key={patient.login.uuid}
                        className='h-10 border-t border-solid border-pharma-border_enable'
                      >
                        <td id={labelId} scope='row' className=''>
                          {patient.name.first} {patient.name.last} -
                          {patient.nat}
                        </td>
                        <td align='center' className=''>
                          {patient.gender}
                        </td>
                        <td align='center' className=''>
                          {formatDate(patient.dob.date)}
                        </td>
                        <td align='center' className=''>
                          <button
                            onClick={() => {
                              viewPatientDetails(patient);
                            }}
                          >
                            Detalhes
                          </button>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className='w-full flex flex-col items-center justify-center '>
        <button
          className='h-full flex flex-row items-center justify-center border-0 rounded gap-1 text-center disabled:opacity-50'
          onClick={loadMorePatients}
          disabled={loadingPatients}
        >
          <ArrowClockwise
            size={28}
            color='#252A37'
            weight='thin'
            className={`${loadingPatients && "animate-spin"}`}
          />
          Carregar mais...
        </button>
      </div>
    </div>
  );
};
