import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import FakeStuff from '../src/FakeStuff';

describe('an enzyme test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<FakeStuff />)
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
});
