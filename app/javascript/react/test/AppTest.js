import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import App from '../src/App';

describe('an enzyme test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />)
  });

  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('should use enzyme', () => {
    expect(wrapper.find('h1').length).toBe(1);

  });

  it('should use jasmine-enzyme matchers', () => {
    expect(wrapper.find('h1')).toBePresent();
  });
  it('should pass', () => {
    expect(wrapper.find('h1').text()).toEqual("Testing!")
  })
});
