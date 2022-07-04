import "@testing-library/jest-dom";
import { server } from "./server";
beforeAll(() => server.listen());
afterEach(() => server.close());
afterAll(() => server.close());
