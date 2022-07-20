import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

import { PatientProvider } from "../contexts/usePatientsContext";
import { PatientModalProvider } from "../contexts/useModalPatients";

const allProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <PatientProvider>
      <PatientModalProvider>{children}</PatientModalProvider>
    </PatientProvider>
  );
};

const renderWithContext = (ui: ReactElement, options?: RenderOptions) => {
  render(ui, {
    wrapper: allProviders,
    ...options,
  });
};

export * from "@testing-library/react";
export * from "@testing-library/user-event";

export { renderWithContext as render };
