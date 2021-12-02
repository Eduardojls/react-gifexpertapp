import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../component/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = () => {};
    
    test('debe de mostrar el componente correctamente', () => {
        
        

        const wrapper = shallow( <AddCategory setCategories = { setCategories }/> );
        expect( wrapper ).toMatchSnapshot();
    });
 
});
