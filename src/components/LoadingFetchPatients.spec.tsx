import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "../test/testing-library-utils";
import { LoadingFetchPatients } from "./LoadingFetchPatients";

describe("Testing LoadingFetchPatients.tsx", () => {
  it("should display loading message", () => {
    render(<LoadingFetchPatients />);
    const loadingMessage = screen.getByText("Carregando pacientes...");
    expect(loadingMessage).toBeInTheDocument();
    waitForElementToBeRemoved(loadingMessage);
  });
});
