import ColorPicker from './color_picker.svelte'
import "@testing-library/jest-dom/extend-expect"
import { render, screen, fireEvent } from '@testing-library/svelte'

/**
 * @jest-environment jsdom
 */

 describe('Color picker', () => {
   const callback = jest.fn();
  
  it('provides the hex value of a color when you click on it', async () => {
    const mock = jest.fn();
    const { getByTestId,component } = render(ColorPicker, { props: { selectColor: mock } })
    const green = getByTestId('green');
  
    component.$on("submit", mock);
    await fireEvent.click(green);
    expect(mock).toHaveBeenCalledWith('#008A00');  
  });
});
