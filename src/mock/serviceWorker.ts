import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import userData from "@/mock/users.json";

export const serviceWorker = setupWorker(
	http.get("/api/users", () => HttpResponse.json(userData))
);
