import {
  patientListOnePageMock,
  patientListTwoPagesMock,
} from "./patientListMock";
import { rest } from "msw";

export const handlers = [
  rest.get("https://randomuser.me/api/?results=50&page=1", (req, res, ctx) => {
    return res(ctx.json(patientListOnePageMock));
  }),
  rest.get("https://randomuser.me/api/?results=50&page=2", (req, res, ctx) => {
    return res(ctx.json(patientListTwoPagesMock));
  }),
];
