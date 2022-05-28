import { Dialog, Transition } from "@headlessui/react";
import { X } from "phosphor-react";
import { Fragment } from "react";
import { usePatientModal } from "../../contexts/useModalPatients";
import { PatientModalInfoRow } from "../UiElements/PatientModalInfoRow";

function PatientModal() {
  const { currentModalPatient, openPatientModal, handleClose } =
    usePatientModal();

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
    <>
      {currentModalPatient && (
        <Transition
          show={openPatientModal}
          as={Fragment}
          enter='transition-opacity duration-150'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog onClose={handleClose}>
            <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
            <div className='fixed inset-0 flex items-center justify-center'>
              <Dialog.Panel>
                <div className='max-w-[500px] bg-pharma-secondary rounded px-3 relative'>
                  <div className='absolute flex items-center justify-center top-2 right-2'>
                    <button onClick={handleClose}>
                      <X size={30} color='#78819B' weight='fill' />
                    </button>
                  </div>

                  <div className='flex flex-col justify-center items-center '>
                    <div className='w-52 h-52 rounded-full overflow-hidden border-4 border-l-neutral-50 relative -top-12'>
                      <img
                        className='w-full h-full'
                        alt={`Foto de ${currentModalPatient?.name.first} ${currentModalPatient?.name.last}`}
                        title={`Foto de ${currentModalPatient?.name.first} ${currentModalPatient?.name.last}`}
                        src={currentModalPatient?.picture.large}
                      />
                    </div>
                    <div className='relative -top-7'>
                      <div className='w-full justify-center flex self-center '>
                        <p className='font-bold text-3xl'>
                          {currentModalPatient?.name.first}{" "}
                          {currentModalPatient?.name.last}
                        </p>
                      </div>

                      <div className='w-full mt-3'>
                        <PatientModalInfoRow
                          field='Email'
                          value={currentModalPatient?.email}
                        />
                        <PatientModalInfoRow
                          field='Gênero'
                          value={
                            currentModalPatient?.gender === "female"
                              ? "Feminino"
                              : "Masculino"
                          }
                        />
                        <PatientModalInfoRow
                          field='Nascimento'
                          value={formatDate(currentModalPatient?.dob.date)}
                        />
                        <PatientModalInfoRow
                          field='Telefone'
                          value={`${currentModalPatient?.phone} ${currentModalPatient?.cell}`}
                        />
                        <PatientModalInfoRow
                          field='Endereço'
                          value={`${currentModalPatient?.location.street.name} ${currentModalPatient?.location.street.number} ${currentModalPatient?.location.city}`}
                        />
                        <PatientModalInfoRow
                          field='Nacionalidade'
                          value={currentModalPatient?.nat}
                        />
                        <PatientModalInfoRow
                          field='Identificação'
                          value={currentModalPatient?.login.uuid}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
}
/*
Imagem
Nome completo
Email
Gênero
Data de nascimento
Telefone
Nacionalidade
Endereço
ID (Número de identificação)
URL para compartilhamento
*/

export default PatientModal;
