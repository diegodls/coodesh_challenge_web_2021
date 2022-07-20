import {
  render as RTLRender,
  screen as RTLScreen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SortingButtonTable } from "./SortingButtonTable";

describe("Testing SortingButtonTable.tsx", () => {
  it("should call setTypeOfSorting() function when clicked", async () => {
    //para cobrir as linhas 41-42 do componente, será necessário trocar a ordem de asc para desc (ou o contrário) utilizando a função abaixo(pesquisar sobre).

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
});
