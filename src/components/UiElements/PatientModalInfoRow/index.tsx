interface Props {
  field: string;
  value: string;
}
export function PatientModalInfoRow({ field, value }: Props) {
  return (
    <div className='w-full flex flex-row my-1'>
      <p className='font-bold'>{field}:</p>
      <p className='pl-1'>{value}</p>
    </div>
  );
}
