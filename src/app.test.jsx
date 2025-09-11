// App.test.jsx
import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./test-utils";

// Mock localStorage for token-based auth
beforeEach(() => localStorage.clear());

describe("App routing and auth flow", () => {
  test("1. Renders Login page on root '/'", () => {
    renderWithProviders(<App />, { route: "/" });
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("2. Navigates to Signup page on '/Signup'", () => {
    renderWithProviders(<App />, { route: "/Signup" });
    expect(screen.getByRole("button", { name: /sign up/i })).toBeInTheDocument();
  });

  test("3. Shows ForgetPassword page on '/forget-password'", () => {
    renderWithProviders(<App />, { route: "/forget-password" });
    expect(screen.getByText(/reset password/i)).toBeInTheDocument();
  });

  test("4. Blocks '/home' when not logged in", () => {
    renderWithProviders(<App />, { route: "/home" });
    // IsLoggedIn should redirect to login
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("5. Allows '/home' when logged in", () => {
    localStorage.setItem("token", "dummyToken");
    renderWithProviders(<App />, { route: "/home" });
    expect(screen.getByText(/welcome/i)).toBeInTheDocument(); // Adjust to your Home text
  });

  test("6. Allows '/update-profile' when logged in", () => {
    localStorage.setItem("token", "dummyToken");
    renderWithProviders(<App />, { route: "/update-profile" });
    expect(screen.getByText(/update profile/i)).toBeInTheDocument();
  });

  test("7. Blocks '/update-profile' when not logged in", () => {
    renderWithProviders(<App />, { route: "/update-profile" });
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("8. Redirects logged-in user away from '/' (Login) using IsLoggedOut", () => {
    localStorage.setItem("token", "dummyToken");
    renderWithProviders(<App />, { route: "/" });
    // Should end up on /home
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  test("9. Shows 404 message on unknown route", () => {
    renderWithProviders(<App />, { route: "/some-unknown" });
    expect(screen.getByText(/route not exist/i)).toBeInTheDocument();
  });

  test("10. Renders MainLayout for public pages", () => {
    renderWithProviders(<App />, { route: "/Signup" });
    expect(screen.getByTestId("main-layout")).toBeInTheDocument();
  });
});
