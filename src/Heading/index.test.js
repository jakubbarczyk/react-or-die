import React from 'react';
import { shallow } from 'enzyme';
import Heading from './';

describe('Heading', () => {
  it('should default to h1', () => {
    const h1 = shallow(<Heading>Text</Heading>);
    expect(h1.name()).toEqual('h1');
  });

  it('should be of set level', () => {
    const h1 = shallow(<Heading level={2}>Text</Heading>);
    expect(h1.name()).toEqual('h2');
  });

  it('should display set text', () => {
    const h1 = shallow(<Heading>Text</Heading>);
    expect(h1.text()).toEqual('Text');
  });
});
