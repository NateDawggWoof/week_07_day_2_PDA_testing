import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('add to 5', ()=>{
    const runningTotal = container.find('#running-total');
    const button1 = container.find('#number1')
    const button4 = container.find('#number4')
    const buttonAdd = container.find('#operator_add')
    const buttonEqual = container.find('#operator-equals')
    button1.simulate('click')
    buttonAdd.simulate('click')
    button4.simulate('click')
    buttonEqual.simulate('click')
    expect(runningTotal.text()).toEqual('5');
  })

  it('subract to 3', ()=>{
    const runningTotal = container.find('#running-total');
    const button7 = container.find('#number7')
    const button4 = container.find('#number4')
    const buttonAdd = container.find('#operator_add')
    const buttonEqual = container.find('#operator-equals')
    button7.simulate('click')
    buttonAdd.simulate('click')
    button4.simulate('click')
    buttonEqual.simulate('click')
    expect(runningTotal.text()).toEqual('5');
  })
})

