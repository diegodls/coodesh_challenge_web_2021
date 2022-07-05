import { render, RenderOptions } from "@testing-library/react";
import React, { FC, ReactElement } from "react";
import { PatientProvider } from "../contexts/usePatientsContext";
import { PatientModalProvider } from "../contexts/useModalPatients";

const allProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <PatientProvider>
      <PatientModalProvider>{children}</PatientModalProvider>
    </PatientProvider>
  );
};

const renderWithContext = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  render(ui, { wrapper: allProviders, ...options });
};

export * from "@testing-library/react";

export { renderWithContext as render };