import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";
import '@testing-library/jest-dom';


describe('pruebas en hook useFetchGifs', () => {
  
  test('debe de retornar el estado inicial', async () => {
    
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('naruto'));
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  })

  test('debe de retornar un areglo de img y el loading false', async () => {
    
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('naruto'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  })
  
  
})
