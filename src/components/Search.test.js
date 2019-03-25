import React from 'react';
import { create, act } from 'react-test-renderer'
import Search from './Search'

it('testing create', () => {
  var pressed = false
  var lastValue = null
  function press(q) {
    pressed = true
    lastValue = q
    return q
  }

  const component = create(<Search search={press}/>)
  const button = component.root.findByType('button')
  const input = component.root.findByType('input')

  expect(button.props.children).toBe('Search')
  expect(input.props.value).toBe('')
  expect(pressed).toBe(false)
  expect(lastValue).toBe(null)

  act(() => {
    input.props.onChange({
      target: {
        value: "teste"
      }
    }) 
  })
  expect(pressed).toBe(false)
  expect(lastValue).toBe(null)

  button.props.onClick()
  expect(pressed).toBe(true)
  expect(lastValue).toBe('teste')
});
