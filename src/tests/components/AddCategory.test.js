import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../component/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(value);
    });

    test('NO debe de postear la información con submit', () => {

        const preventDefault = () => { };
        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Probando';

        // 1. simular el handleInputChange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        // 3. setCategories se debe haber llamado 1 vez
        expect(setCategories).toHaveBeenCalled();

        // 4. El valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    });


});
