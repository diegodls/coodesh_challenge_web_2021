import { User } from "phosphor-react";

export function ErrorPatientNotFound() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <User size={60} color='#EB5353' weight='fill' />
      <p className='text-pharma-error_primary text-4xl'>Oops!</p>
      <div className='w-full border-solid border-[1px] border-pharma-error_primary' />
      <p className='text-pharma-txt_primary text-xl'>
        Não foi possível localizar o paciente.
      </p>
    </div>
  );
}
