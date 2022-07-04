import Header from "../../components/Header";

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return (
    <>
      <div className='h-screen flex flex-col bg-pharma-primary overflow-auto'>
        <Header />
        <div className='w-full h-full flex justify-center items-center'>
          {children}
        </div>
      </div>
    </>
  );
}

export default Main;
