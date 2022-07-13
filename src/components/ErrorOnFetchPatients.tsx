import { Warning } from "phosphor-react";
import { usePatientContext } from "../contexts/usePatientsContext";

export function ErrorOnFetchPatients() {
  const { errorLoadingPatients } = usePatientContext();

  return (
    <div className='flex flex-col items-center justify-center'>
      <Warning size={60} color='#EB5353' weight='fill' />
      <p className='text-pharma-error_primary text-4xl'>Oops!</p>
      <div className='w-full border-solid border-[1px] border-pharma-error_primary' />
      <p className='text-pharma-txt_primary text-xl'>
        Erro ao carregar a lista de pacientes.
      </p>
      <p className='text-pharma-txt_primary'>
        Erro: {errorLoadingPatients?.toString()}
      </p>
    </div>
  );
}
