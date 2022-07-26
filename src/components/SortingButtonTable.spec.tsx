import {
  render as RTLRender,
  screen as RTLScreen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as PatientContext from "../contexts/usePatientsContext";
import { patientContextMockValues } from "../test/patientContextMocks";

import { SortingButtonTable } from "./SortingButtonTable";

describe("Testing SortingButtonTable.tsx", () => {
  it("should call setTypeOfSorting() function when clicked", async () => {
    const setTypeOfSorting = jest.fn();

    const mockContextValues: PatientContext.PatientContextData = {
      ...patientContextMockValues,
      defineTypeOfSorting: setTypeOfSorting,
    };

    jest
      .spyOn(PatientContext, "usePatientContext")
      .mockImplementation(() => mockContextValues);

    RTLRender(<SortingButtonTable name='Test' type='name' />);

    const sortingButton = RTLScreen.getByRole("button", { name: /test/i });

    expect(sortingButton).toBeInTheDocument();

    await userEvent.click(sortingButton);

    expect(setTypeOfSorting).toHaveBeenCalledTimes(1);
  });

  it("should render ascending order property", async () => {
    const mockContextValues: PatientContext.PatientContextData = {
      ...patientContextMockValues,
      order: "asc",
      orderBy: "name",
    };

    jest
      .spyOn(PatientContext, "usePatientContext")
      .mockImplementation(() => mockContextValues);

    RTLRender(<SortingButtonTable name='Test' type='name' />);

    const ascOrderText = await RTLScreen.findByText(/sorted ascending/i);

    expect(ascOrderText).toBeInTheDocument();

    const descOrderText = RTLScreen.queryByText(/sorted descending/i);

    expect(descOrderText).not.toBeInTheDocument();
  });

  it("should render descending order property", async () => {
    const mockContextValues: PatientContext.PatientContextData = {
      ...patientContextMockValues,
      order: "desc",
      orderBy: "name",
    };

    jest
      .spyOn(PatientContext, "usePatientContext")
      .mockImplementation(() => mockContextValues);

    RTLRender(<SortingButtonTable name='Test' type='name' />);

    const descOrderText = await RTLScreen.findByText(/sorted descending/i);

    expect(descOrderText).toBeInTheDocument();

    const ascOrderText = RTLScreen.queryByText(/sorted ascending/i);

    expect(ascOrderText).not.toBeInTheDocument();
  });
});
