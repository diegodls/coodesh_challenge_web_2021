import { User } from "phosphor-react";
import { Logo } from "../assets/svg/logo";

export function Header() {
  return (
    <>
      <div className='w-full flex justify-center items-center bg-pharma-secondary'>
        <div className='w-11/12 h-14 flex flex-row items-center justify-between'>
          <div className='flex flex-row gap-1 items-center '>
            <Logo width='40' />
            <p className='font-bold'>Pharma Inc.</p>
          </div>
          <div
            className='w-10 h-10 bg-pharma-primary rounded-full flex items-center justify-center'
            title='Entrar'
          >
            <User size={20} color='#78819B' weight='fill' />
          </div>
        </div>
      </div>
    </>
  );
}
