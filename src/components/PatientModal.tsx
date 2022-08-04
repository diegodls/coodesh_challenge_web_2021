import { Dialog, Transition } from "@headlessui/react";
import { X } from "phosphor-react";
import { Fragment } from "react";
import { usePatientModal } from "../contexts/useModalPatients";
import { formatDate } from "../utils/common-functions";

function PatientModal() {
  const { currentModalPatient, openPatientModal, handleClose } =
    usePatientModal();

  function patientModalInfoRow(field: string, value: string) {
    return (
      <div className='w-full flex flex-row my-1'>
        <p className='font-bold'>{field}:</p>
        <p className='pl-1'>{value}</p>
      </div>
    );
  }

  return (
    <>
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
                  <button aria-label='close-modal' onClick={handleClose}>
                    <X size={30} color='#78819B' weight='fill' />
                  </button>
                </div>
                <div className='flex flex-col justify-center items-center '>
                  {currentModalPatient ? (
                    <>
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
                          {patientModalInfoRow(
                            "Email",
                            currentModalPatient?.email
                          )}
                          {patientModalInfoRow(
                            "Gênero",
                            currentModalPatient?.gender === "female"
                              ? "Feminino"
                              : "Masculino"
                          )}
                          {patientModalInfoRow(
                            "Nascimento",
                            formatDate(currentModalPatient?.dob.date)
                          )}
                          {patientModalInfoRow(
                            "Telefone",
                            `${currentModalPatient?.phone} ${currentModalPatient?.cell}`
                          )}
                          {patientModalInfoRow(
                            "Endereço",
                            `${currentModalPatient?.location.street.name} ${currentModalPatient?.location.street.number} ${currentModalPatient?.location.city}`
                          )}
                          {patientModalInfoRow(
                            "Nacionalidade",
                            currentModalPatient?.nat
                          )}
                          {patientModalInfoRow(
                            "Identificação",
                            currentModalPatient?.login.uuid
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <h1>Erro ao carregar os dados do paciente!</h1>
                    </>
                  )}
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
export default PatientModal;
