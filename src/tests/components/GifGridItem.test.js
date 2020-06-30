import React from 'react';
import GifGridItem from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('tests del componente <GifGridItem />', () => {

  const title = 'Este seria el titulo';
  const url = 'http://algunaImagen.jpg ';
  const wrapper = shallow(<GifGridItem title={title} url={url}/>);
  
  test('el componente GifGridItem debe renderizarse correctamente', () => {
    
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de tener un parrafo con el title ', () => {
    
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  })

  test('la imagen debe tener el url y title de props', () => {
    
    const img = wrapper.find('img');
    // console.log(img.html()); te mostrara todo el html del elemento seleccionado
    // console.log(img.props().src);

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);

  })
  
  test('debe de tener la clase animate__fadeIn', () => {
    
    const div = wrapper.find('div');
    // console.log(div.html());
    // console.log(div.props());
    // console.log(div.prop('className').includes('animate__fadeIn'));

    expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
  })
  // 
  
})

