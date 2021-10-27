import SelectedColor from './selected_color.svelte'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from '@testing-library/svelte'

/**
 * @jest-environment jsdom
 */

it('it displays the name of the app', async () => {
  const { getByTestId } = render(SelectedColor)
  const selected = getByTestId('selected')

  // with jest-dom
  expect(selected).toHaveTextContent('selected:')
})