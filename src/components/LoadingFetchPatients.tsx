import { ArrowClockwise } from "phosphor-react";

export function LoadingFetchPatients() {
  return (
    <div className='flex flex-col items-center opacity-50'>
      <ArrowClockwise
        size={32}
        color='#252A37'
        weight='fill'
        className='animate-spin'
      />
      <span>Carregando pacientes...</span>
    </div>
  );
}
