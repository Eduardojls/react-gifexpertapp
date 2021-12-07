import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
    
    test('debe de cargar el componente correctamente', () => {
       
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    });
    
});
