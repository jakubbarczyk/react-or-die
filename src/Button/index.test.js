import React from 'react';
import { shallow } from 'enzyme';
import Button from './';

describe('Button', () => {
  const functionFake = jest.fn();
  const button = shallow(<Button onClick={functionFake}>Text</Button>);

  it('should display set text', () => {
    expect(button.text()).toEqual('Text');
  });

  it('should call function on click', () => {
    button.simulate('click');
    expect(functionFake).toHaveBeenCalled();
  });
});
