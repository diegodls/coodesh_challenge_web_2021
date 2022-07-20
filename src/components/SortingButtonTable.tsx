import { ArrowsDownUp, SortAscending, SortDescending } from "phosphor-react";
import { Order, OrderByTypes } from "../interfaces/IPatient";

interface Props {
  name: string;
  type: keyof OrderByTypes;
  order: Order;
  orderBy: keyof OrderByTypes | null;
  setTypeOfSorting(name: string): void;
}

export function SortingButtonTable({
  name,
  type,
  order,
  orderBy,
  setTypeOfSorting,
}: Props) {
  return (
    <button
      aria-label={`Ordenar pacientes por ${name}`}
      className='w-full h-full flex flex-row items-center justify-center gap-1'
      onClick={() => {
        setTypeOfSorting(type);
      }}
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
