import { ArrowsDownUp, SortAscending, SortDescending } from "phosphor-react";
import { usePatientContext } from "../contexts/usePatientsContext";
import { OrderByTypes } from "../interfaces/IPatient";

interface SortingButtonTableProps {
  name: string;
  type: keyof OrderByTypes;
}

export function SortingButtonTable({ name, type }: SortingButtonTableProps) {
  const { order, orderBy, defineTypeOfSorting } = usePatientContext();

  return (
    <button
      aria-label={`Ordenar pacientes por ${name}`}
      className='w-full h-full flex flex-row items-center justify-center gap-1 pl-5 font-bold'
      onClick={() => defineTypeOfSorting(type)}
    >
      {name}

      {!orderBy && type === "name" && (
        <ArrowsDownUp size={20} color='#78819B' weight='fill' />
      )}

      {(orderBy || type !== "name") && orderBy !== type && (
        <div className='w-5 h-5' />
      )}

      {orderBy === type ? (
        <div className=''>
          {order === "asc" ? (
            <SortAscending size={20} color='#252A37' weight='fill' />
          ) : (
            <SortDescending size={20} color='#252A37' weight='fill' />
          )}
        </div>
      ) : null}

      {orderBy === type ? (
        <div className='border-0 border-solid rec h-0 p-0 absolute whitespace-nowrap w-1 overflow-hidden'>
          {order === "asc" ? "sorted ascending" : "sorted descending"}
        </div>
      ) : null}
    </button>
  );
}
