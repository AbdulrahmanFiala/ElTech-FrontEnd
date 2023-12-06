import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./services/reducers/index";

import "./styles/index.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/site-themes/themewar-icons.css";
import "./styles/site-themes/flaticon.css";
import "./styles/site-themes/animate.css";
import "./styles/site-themes/owl.carousel.min.css";
import "./styles/site-themes/owl.theme.default.min.css";
import "./styles/site-themes/settings.css";
import "./styles/site-themes/lightcase.css";
import "./styles/site-themes/preset.css";
import "./styles/site-themes/ignore_in_wp.css";
import "./styles/site-themes/theme.css";
import "./styles/site-themes/responsive.css";
import "./styles/site-themes/pe-icon-7-stroke.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
