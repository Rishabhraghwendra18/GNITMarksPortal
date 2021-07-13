import { render, fireEvent } from "@testing-library/react";
import App from "../pages/App";
import Home from "../pages/Home";

describe("are Landing page components rendering", () => {
  it("is NavBar rendered", () => {
    const { queryByTitle } = render(<App />);
    const navBar = queryByTitle("NavBar");
    expect(navBar).toBeTruthy();
  });
  it("is App rendering Home component", () => {
    const { queryByTitle } = render(<App />);
    const home = queryByTitle("Home");
    expect(home).toBeTruthy();
  });
  it("is Hero section rendering", () => {
    const { queryByTitle } = render(<Home />);
    const hero = queryByTitle("Hero");
    expect(hero).toBeTruthy();
  });
  it("is Toppers section rendering", () => {
    const { queryByTitle } = render(<Home />);
    const hero = queryByTitle("Toppers");
    expect(hero).toBeTruthy();
  });
  it("is Login section rendering", () => {
    const { queryByTitle } = render(<Home />);
    const hero = queryByTitle("Login");
    expect(hero).toBeTruthy();
  });
  it("is MyProfile section rendering", () => {
    const { queryByTitle } = render(<Home />);
    const hero = queryByTitle("Profile");
    expect(hero).toBeTruthy();
  });
});
