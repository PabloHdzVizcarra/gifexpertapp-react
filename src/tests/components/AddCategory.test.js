import React from 'react';
import '@testing-library/jest-dom';

import AddCategory from '../../components/AddCategory';
import { shallow } from "enzyme";

describe('pruebas en <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
    
  })
  
  test('el componente debe de mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();
  })

  test('debe de cambiar la caja de texto', () => {
    
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value } });

    expect(wrapper.find('p').text().trim()).toBe(value);
  })

  test('NO se debe de manejar la informacion con submit', () => {
    
    wrapper.find('form').simulate('submit', { preventDefault() { } });

    expect(setCategories).not.toHaveBeenCalled();

  })

  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    
    const input = wrapper.find('input');
    const value = 'haz click';
    input.simulate('change', { target: { value } });

    wrapper.find('form').simulate('submit', { preventDefault() { } });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(input.prop('value')).toBe('');
  })
  
  
  
})
 