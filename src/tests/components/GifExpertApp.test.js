import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import GifExpertApp from "../../GifExpertApp";

describe('pruebas en el componente <GifExpertApp />', () => {
  
  const wrapper = shallow(<GifExpertApp />);

  test('el componente debe renderizarse correctamente', () => {
    
    expect(wrapper).toMatchSnapshot();

  })

  test('debe de mostrar una lista de categorias', () => {
    
    const categories = ['One Punch', 'Naruto'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  })
  
  
})
