import {
  render as RTLRender,
  screen as RTLScreen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as PatientContext from "../contexts/usePatientsContext";

import { SortingButtonTable } from "./SortingButtonTable";

const setTypeOfSorting = jest.fn();

const mockContextValues: PatientContext.PatientContextData = {
  errorLoadingPatients: "ErrorTest",
  patientsList: null,
  filteredPatientsList: null,
  loadingPatients: false,
  nameFilter: "",
  genderFilter: null,
  natFilter: [],
  currentFilters: "",
  lastFilters: "",
  order: "asc",
  orderBy: "name",
  loadMorePatients: jest.fn(),
  defineTypeOfSorting: setTypeOfSorting,
  handleChangeGenderFilter: jest.fn(),
  setNatFilter: jest.fn(),
  handleChangeNameFilter: jest.fn(),
  handleChangePatientQuantity: jest.fn(),
};

jest
  .spyOn(PatientContext, "usePatientContext")
  .mockImplementation(() => mockContextValues);

describe("Testing SortingButtonTable.tsx", () => {
  it("should call setTypeOfSorting() function when clicked", async () => {
    RTLRender(<SortingButtonTable name='Test' type='name' />);

    const sortingButton = RTLScreen.getByRole("button", { name: /test/i });

    expect(sortingButton).toBeInTheDocument();

    await userEvent.click(sortingButton);

    expect(setTypeOfSorting).toHaveBeenCalledTimes(1);
  });

  it("should be able to call setTypeOfSorting() after changing from asc to desc", async () => {
    const { rerender } = RTLRender(
      <SortingButtonTable name='Test' type='name' />
    );

    const sortingButton = RTLScreen.getByRole("button", { name: /test/i });

    expect(sortingButton).toBeInTheDocument();

    await userEvent.click(sortingButton);

    expect(setTypeOfSorting).toHaveBeenCalledTimes(1);

    rerender(<SortingButtonTable name='Test' type='name' />);

    await userEvent.click(sortingButton);

    expect(setTypeOfSorting).toHaveBeenCalledTimes(2);
  });
});
