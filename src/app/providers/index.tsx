import { RouterProvider } from "react-router-dom";
import type { Router } from "@remix-run/router/dist/router";
import { Provider } from "react-redux";
import { store } from "../store/store";

type Props = {
    router: Router;
    store: typeof store;
};

export const Providers = ({ router, store }: Props) => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
};
