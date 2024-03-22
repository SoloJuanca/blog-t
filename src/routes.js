import { LandingPage, CatalogPage } from "./container";

export const routes = [
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/catalog",
        element: <CatalogPage />,
    }
]

