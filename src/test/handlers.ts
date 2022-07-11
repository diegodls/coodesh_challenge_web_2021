import { patientListOnePageMock } from "./patientListMock";
import { rest } from "msw";
import { ApiResponseComplete } from "../interfaces/IPatient";

export const handlers = [
  rest.get<ApiResponseComplete>(
    "https://randomuser.me/api/",
    (req, res, ctx) => {
      return res(ctx.json(patientListOnePageMock));
    }
  ),
];
