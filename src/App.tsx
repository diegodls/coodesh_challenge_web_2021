import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PatientModalProvider } from "./contexts/useModalPatients";
import { PatientProvider } from "./contexts/usePatientsContext";

import { Main } from "./layout/Main";
import { Home } from "./pages/Home";

export function App() {
  return (
    <PatientProvider>
      <PatientModalProvider>
        <BrowserRouter>
          <Main>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Main>
        </BrowserRouter>
      </PatientModalProvider>
    </PatientProvider>
  );
}
