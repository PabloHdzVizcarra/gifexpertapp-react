import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('pruebas en <GifGrid />', () => {

  const category = 'Happy';
  
  test('el componente debe renderizarse correctamente', () => {
    
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

    const wrapper = shallow(<GifGrid category={category}/>);
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    
    const gifs = [
      {
        id: 'ABC',
        url: 'http://text.gif',
        title: 'cualquier img'
      },
      {
        id: 'XYZ',
        url: 'http://text.gif',
        title: 'cualquier img'
      }
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })

    const wrapper = shallow(<GifGrid category={category} />);
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    //console.log(wrapper.find('GifGridItem').length)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

  })
  
  
})

