import { getGifs } from "../../helpers/getGifs"

describe('pruebas con getGifs Fetch', () => {
  
  test('debe de obtener 10 elementos', async () => {

    const response = await getGifs('Dragon Ball');
    expect(response.length).toBe(10);
  })

  test('debe de contener 0 elementos si no se pide nada al API', async () => {

    const response = await getGifs('');

    expect(response.length).toBe(0);
  })
  
})
