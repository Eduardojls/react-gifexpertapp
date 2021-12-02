import { GifGridItem } from "../../component/GifGridItem";
import { shallow } from "enzyme";
import '@testing-library/jest-dom';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'EDMA';
    const url ='https://Nalitasofia/bella.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url}/> );

    test('debe de mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de contener un parrafo con el titulo (title)', () => {
        
        const p = wrapper.find( 'p' );
        expect( p.text().trim() ).toBe( title );
    });

    test('debe de tener la url igual a la imagen y alt de los props', () => {
        
        const img = wrapper.find( 'img' );
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
        

    });

    test('el div debe de tener un className: animate_fadeIn', () => {
        
        const div = wrapper.find( 'div' );
        expect ( div.hasClass('card animate__animated animate__fadeIn') ).toBe( true );

        const className = div.prop('className');
        expect( className.includes('animate__fadeIn') ).toBe( true );
        
    });

});