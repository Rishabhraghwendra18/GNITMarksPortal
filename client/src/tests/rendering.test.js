import { render } from "@testing-library/react";
import App from "../pages/App";
import Home from "../pages/Home";
import Hero from "../pages/landingPage/components/Hero";
import Login from "../pages/landingPage/components/Login";
import MyProfile from "../pages/landingPage/components/MyProfile";
import NavBar from "../pages/landingPage/components/NavBar";

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

describe("are elements in each component rendering", () => {
  it("is Hero rendering quote & img", () => {
    const { queryByTitle } = render(<Hero />);
    const heroQuote = queryByTitle("Hero_Quote");
    const heroImage = queryByTitle("Hero_Image");
    expect(heroQuote).toBeTruthy();
    expect(heroImage).toBeTruthy();
  });
  it("is Login rendering login box & img", () => {
    const { queryByTitle } = render(<Login />);
    const loginBox = queryByTitle("Login_Box");
    const LoginImage = queryByTitle("Login_Image");
    expect(loginBox).toBeTruthy();
    expect(LoginImage).toBeTruthy();
  });
  it("is MyProfile rendering all stuffs", () => {
    const { queryByTitle } = render(<MyProfile />);
    const heading = queryByTitle("heading");
    const aboutMe = queryByTitle("about_me");
    const myPic = queryByTitle("mine_pic");
    const myName = queryByTitle("my_name");
    const title = queryByTitle("title");
    expect(heading).toBeTruthy();
    expect(aboutMe).toBeTruthy();
    expect(myPic).toBeTruthy();
    expect(myName).toBeTruthy();
    expect(title).toBeTruthy();
  });
  it("is NavBar rendering links & logo", () => {
    const { queryByTitle } = render(<NavBar />);
    const navBarLogo = queryByTitle("navbar_logo");
    const homeAnchorTag = queryByTitle("home_anchor_tag");
    const loginAnchorTag = queryByTitle("login_anchor_tag");
    const contactAnchorTag = queryByTitle("contact_anchor_tag");
    expect(navBarLogo).toBeTruthy();
    expect(homeAnchorTag).toBeTruthy();
    expect(loginAnchorTag).toBeTruthy();
    expect(contactAnchorTag).toBeTruthy();
  });
});
