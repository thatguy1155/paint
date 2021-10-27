import Header from './header.svelte'
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from '@testing-library/svelte'

/**
 * @jest-environment jsdom
 */

it('it displays the name of the app', async () => {
  const { getByTestId } = render(Header)
  const header = getByTestId('header')

  // with jest-dom
  expect(header).toHaveTextContent('paint')
})