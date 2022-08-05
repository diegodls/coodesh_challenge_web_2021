import {
  render as RTLRender,
  screen as RTLScreen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as PatientContext from "../contexts/usePatientsContext";
import { patientContextMockValues } from "../test/patientMocks";

import { LoadMoreButton } from "./LoadMoreButton";

describe("Testing LoadMoreButton.tsx", () => {
  it("should call loadMorePatients() function when clicked", async () => {
    const loadMorePatients = jest.fn();

    const mockContextValues: PatientContext.PatientContextData = {
      ...patientContextMockValues,
      loadMorePatients: loadMorePatients,
    };

    jest
      .spyOn(PatientContext, "usePatientContext")
      .mockImplementation(() => mockContextValues);

    RTLRender(<LoadMoreButton />);

    const loadMoreButton = RTLScreen.getByRole("button", {
      name: /load-more-button/i,
    });

    expect(loadMoreButton).toBeInTheDocument();

    await userEvent.click(loadMoreButton);

    expect(loadMorePatients).toHaveBeenCalledTimes(1);
  });
});
