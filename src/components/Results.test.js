import React from 'react';
import { create, act } from 'react-test-renderer'
import Results from './Results'

it('Results', () => {
  const component = create(<Results data={[{source:"A", ids:[1,2,3]}]}/>)
  const ul1 = component.root.findByType('ul')
  const sourceA = ul1.findByType('li')
  const ul2 = component.root.findAllByType('ul')[1]
  const id1 = ul2.findAllByType('li')[0]

  expect(sourceA.props.children[0]).toBe('A')
  expect(id1.props.children).toBe(1)
});