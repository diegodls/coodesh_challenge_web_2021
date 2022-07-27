import React from "react";
import {
  render,
  waitFor,
  act,
  renderHook,
  cleanup,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  usePatientContext,
  PatientProvider,
  PatientContext,
} from "./usePatientsContext";
import {
  API_PATIENT_QUANTITY,
  TIMEOUT_INTERVAL_ACTION,
  TIMEOUT_INTERVAL_WAIT,
} from "../utils/constants";

describe("usePatientContext", () => {
  afterEach(cleanup);

  it("nameFilter is empty by default", () => {
    const { getByText } = render(
      <PatientProvider>
        <PatientContext.Consumer>
          {(value) => (
            <span>The name filter is: {value.nameFilter.toString()}</span>
          )}
        </PatientContext.Consumer>
      </PatientProvider>
    );

    expect(getByText("The name filter is:")).toBeTruthy();
  });

  it("should be able to change nameFilter", async () => {
    const { getByText, getByTestId, debug } = render(
      <PatientProvider>
        <PatientContext.Consumer>
          {(value) => (
            <>
              <input
                type='search'
                data-testid='searchByName'
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  value.handleChangeNameFilter(e.target.value);
                }}
              />
              <span>The name filter is: {value.nameFilter.toString()}</span>
            </>
          )}
        </PatientContext.Consumer>
      </PatientProvider>
    );

    const inputElement = getByTestId("searchByName");
    userEvent.type(inputElement, "diegodls");

    await waitFor(() => {
      expect(getByText("The name filter is: diegodls")).toBeInTheDocument();
    });
  });

  it("should load patients", async () => {
    const wrapper = ({ children }: any) => (
      <PatientProvider>{children}</PatientProvider>
    );
    const { result } = renderHook(() => usePatientContext(), { wrapper });

    act(() => {
      result.current.loadMorePatients();
    });

    await waitFor(() => {
      expect(result.current.patientsList?.length).toBe(API_PATIENT_QUANTITY);
      expect(result.current.filteredPatientsList?.length).toBe(
        API_PATIENT_QUANTITY
      );
    });
  });

  it("should append more patients", async () => {
    const wrapper = ({ children }: any) => (
      <PatientProvider>{children}</PatientProvider>
    );
    const { result } = renderHook(() => usePatientContext(), { wrapper });

    act(() => {
      result.current.loadMorePatients();
    });

    setTimeout(() => {
      act(() => {
        result.current.loadMorePatients();
      });
    }, TIMEOUT_INTERVAL_ACTION);

    await waitFor(
      () => {
        expect(result.current.patientsList?.length).toBe(
          API_PATIENT_QUANTITY * 2
        );
        expect(result.current.filteredPatientsList?.length).toBe(
          API_PATIENT_QUANTITY * 2
        );
      },
      { timeout: TIMEOUT_INTERVAL_WAIT }
    );
  });

  it("should load first patients when change nationality", async () => {
    const wrapper = ({ children }: any) => (
      <PatientProvider>{children}</PatientProvider>
    );
    const { result } = renderHook(() => usePatientContext(), { wrapper });

    act(() => {
      result.current.loadMorePatients();
    });

    act(() => {
      result.current.setNatFilter(["BR"]);
    });

    setTimeout(() => {
      act(() => {
        result.current.loadMorePatients();
      });
    }, TIMEOUT_INTERVAL_ACTION);

    await waitFor(
      () => {
        expect(result.current.patientsList?.length).toBe(API_PATIENT_QUANTITY);
        expect(result.current.filteredPatientsList?.length).toBe(
          API_PATIENT_QUANTITY
        );
      },
      { timeout: TIMEOUT_INTERVAL_WAIT }
    );
  });

  it("should organize nationalities", async () => {
    const wrapper = ({ children }: any) => (
      <PatientProvider>{children}</PatientProvider>
    );
    const { result } = renderHook(() => usePatientContext(), { wrapper });

    act(() => {
      result.current.setNatFilter(["AU", "CH", "BR", "CA", "GB"]);
    });

    await waitFor(
      () => {
        expect(result.current.natFilter).toEqual([
          "AU",
          "BR",
          "CA",
          "CH",
          "GB",
        ]);
      },
      { timeout: TIMEOUT_INTERVAL_WAIT }
    );
  });

  it("should load first patients when change gender", async () => {
    const wrapper = ({ children }: any) => (
      <PatientProvider>{children}</PatientProvider>
    );
    const { result } = renderHook(() => usePatientContext(), { wrapper });

    act(() => {
      result.current.loadMorePatients();
    });

    act(() => {
      result.current.handleChangeGenderFilter("male");
    });

    act(() => {
      result.current.loadMorePatients();
    });

    await waitFor(() => {
      expect(result.current.patientsList?.length).toBe(API_PATIENT_QUANTITY);
      expect(result.current.filteredPatientsList?.length).toBe(
        API_PATIENT_QUANTITY
      );
    });
  });

  it("should be asc the default order type of sorting", async () => {
    const wrapper = ({ children }: any) => (
      <PatientProvider>{children}</PatientProvider>
    );
    const { result } = renderHook(() => usePatientContext(), { wrapper });

    await waitFor(() => {
      expect(result.current.order).toBe("asc");
    });
  });

  it("should be able order the list by name", async () => {
    const wrapper = ({ children }: any) => (
      <PatientProvider>{children}</PatientProvider>
    );
    const { result } = renderHook(() => usePatientContext(), { wrapper });

    act(() => {
      result.current.handleChangePatientQuantity(200);
    });

    act(() => {
      result.current.handleChangeNameFilter("A");
    });

    setTimeout(() => {
      act(() => {
        result.current.defineTypeOfSorting("name");
      });
    }, TIMEOUT_INTERVAL_ACTION);

    await waitFor(
      () => {
        expect(result.current.order).toBe("asc");
        expect(result.current.orderBy).toBe("name");
      },
      { timeout: TIMEOUT_INTERVAL_WAIT }
    );

    act(() => {
      result.current.defineTypeOfSorting("name");
    });

    await waitFor(
      () => {
        expect(result.current.order).toBe("desc");
        expect(result.current.orderBy).toBe("name");
      },
      { timeout: TIMEOUT_INTERVAL_WAIT }
    );
  });

  it("should be able order the list by gender", async () => {
    const wrapper = ({ children }: any) => (
      <PatientProvider>{children}</PatientProvider>
    );
    const { result } = renderHook(() => usePatientContext(), { wrapper });

    act(() => {
      result.current.defineTypeOfSorting("gender");
    });

    await waitFor(
      () => {
        expect(result.current.order).toBe("asc");
        expect(result.current.orderBy).toBe("gender");
      },
      { timeout: TIMEOUT_INTERVAL_WAIT }
    );

    setTimeout(() => {
      act(() => {
        result.current.defineTypeOfSorting("gender");
      });
    }, TIMEOUT_INTERVAL_ACTION);

    await waitFor(
      () => {
        expect(result.current.order).toBe("desc");
        expect(result.current.orderBy).toBe("gender");
      },
      { timeout: TIMEOUT_INTERVAL_WAIT }
    );
  });

  it("should be able order the list by date of birth", async () => {
    const wrapper = ({ children }: any) => (
      <PatientProvider>{children}</PatientProvider>
    );
    const { result } = renderHook(() => usePatientContext(), { wrapper });

    act(() => {
      result.current.handleChangePatientQuantity(200);
    });

    act(() => {
      result.current.defineTypeOfSorting("dob");
    });

    await waitFor(
      () => {
        expect(result.current.order).toBe("asc");
        expect(result.current.orderBy).toBe("dob");
      },
      { timeout: TIMEOUT_INTERVAL_WAIT }
    );

    setTimeout(() => {
      act(() => {
        result.current.defineTypeOfSorting("dob");
      });
    }, TIMEOUT_INTERVAL_ACTION);

    await waitFor(
      () => {
        expect(result.current.order).toBe("desc");
        expect(result.current.orderBy).toBe("dob");
      },
      { timeout: TIMEOUT_INTERVAL_WAIT }
    );
  });

  it("should be able to load more after change filters", async () => {
    const wrapper = ({ children }: any) => (
      <PatientProvider>{children}</PatientProvider>
    );
    const { result } = renderHook(() => usePatientContext(), { wrapper });

    await waitFor(() => {
      expect(result.current.patientsList?.length).toBe(API_PATIENT_QUANTITY);
    });

    act(() => {
      result.current.handleChangeGenderFilter("male");
    });

    act(() => {
      result.current.handleApplyFilters();
    });

    await waitFor(() => {
      expect(result.current.currentFilters).toBe("&gender=male");
    });
  });
});
