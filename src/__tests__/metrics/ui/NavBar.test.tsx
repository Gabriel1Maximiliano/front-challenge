/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from "@testing-library/react";
import { NavBar } from "../../../metrics/ui";

describe("Pruebas sobre <NavBar />", () => {
  const { container } = render(<NavBar />);

  test("Debe hacer match con el SnapShot", () => {
    expect(container).toMatchSnapshot();
  });
  test("Debe mostrar Challenge Meli en una etiqueta <p></p> ", () => {
    const { getByText } = render(<NavBar />);

    const title = "Challenge Meli";

    expect(getByText(title)).toBeTruthy();
  });
  test("Debe mostrar Challenge Meli", () => {
    const title = "Challenge Meli";

    const { getByTestId } = render(<NavBar />);

    expect(getByTestId("title-test").innerHTML).toBeTruthy();
    expect(getByTestId("title-test").innerHTML).toContain(title);
  });
  test("Debe mostrar el <MenuIcon />", () => {
  
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId("menu-icon").innerHTML).toBeTruthy();
    
  });
  test("Debe mostrar el <DarkModeIcon />", () => {
    
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId("dark-mode-icon").innerHTML).toBeTruthy();
    
  });
});
