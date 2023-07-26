

/* eslint-disable @typescript-eslint/no-empty-function */
import {render} from '@testing-library/react'
import { NavBar } from '../../../metrics/ui'
describe('Pruebas sobre <NavBar />', () => {

    test('Debe hacer match con el SnapShot', ()=>{
        const { container } = render(<NavBar />);

        expect( container ).toMatchSnapshot();
    })
    test('Debe mostrar Challenge Meli en una etiqueta <p></p> ', ()=>{

        const title = 'Challenge Meli';
        const { getByText } = render(<NavBar />);

        expect( getByText(title) ).toBeTruthy();
    })
})

