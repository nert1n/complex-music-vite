import { Provider } from "react-redux";

import { store } from "@app/store/store.ts";

import { IProviders } from "./providers.interface";

const Providers = ({ children }: IProviders) => {
	return <Provider store={store}>{children}</Provider>;
};

export default Providers;
