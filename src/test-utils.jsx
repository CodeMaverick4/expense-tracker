// test-utils.jsx
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "./store"; // <-- your Redux store

export function renderWithProviders(ui, { route = "/" } = {}) {
  window.history.pushState({}, "Test page", route);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    </Provider>
  );
}
