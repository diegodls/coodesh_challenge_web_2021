import {
  render as RTLRender,
  screen as RTLScreen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SortingButtonTable } from "./SortingButtonTable";

describe("Testing SortingButtonTable.tsx", () => {
  it("should call setTypeOfSorting() function when clicked", async () => {
    const setTypeOfSorting = jest.fn();

    RTLRender(
      <SortingButtonTable
        name='Test'
        order='asc'
        orderBy='name'
        type='name'
        setTypeOfSorting={setTypeOfSorting}
      />
    );

    const sortingButton = RTLScreen.getByRole("button", { name: /test/i });

    expect(sortingButton).toBeInTheDocument();

    await userEvent.click(sortingButton);

    expect(setTypeOfSorting).toHaveBeenCalledTimes(1);
  });

  it("should be able to call setTypeOfSorting() after changing from asc to desc", async () => {
    const setTypeOfSorting = jest.fn();

    const { rerender } = RTLRender(
      <SortingButtonTable
        name='Test'
        order='asc'
        orderBy='name'
        type='name'
        setTypeOfSorting={setTypeOfSorting}
      />
    );

    const sortingButton = RTLScreen.getByRole("button", { name: /test/i });

    expect(sortingButton).toBeInTheDocument();

    await userEvent.click(sortingButton);

    expect(setTypeOfSorting).toHaveBeenCalledTimes(1);

    rerender(
      <SortingButtonTable
        name='Test'
        order='desc'
        orderBy='name'
        type='name'
        setTypeOfSorting={setTypeOfSorting}
      />
    );

    await userEvent.click(sortingButton);

    expect(setTypeOfSorting).toHaveBeenCalledTimes(2);
  });
});
