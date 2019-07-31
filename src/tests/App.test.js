import React from 'react'
import { mount } from 'enzyme'
import App from '../js/containers/App'
// import Block from '../js/components/StyledComponents/Block'
// import Button from '../js/components/StyledComponents/Button'
// import { Header } from '../js/components/Header'
// import { LeftBar } from '../js/components/LeftBar'
// import { CentralArea } from '../js/components/CentralArea'
// import { RightBar } from '../js/components/RightBar'

describe('<App />', () => {
  const wrapper = mount(<App />)
  // beforeEach(() => {
  //   wrapper = mount(<App />)
  // })
  it('Render <App />, check initial snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('Add one screen', () => {
    wrapper.find('button#addButton').simulate('click')
    expect(wrapper.find('div#newScreen')).toHaveLength(1)
  })
  it('check activeId', () => {
    const activeId = wrapper.find('span#activeId').text()
    const screenName = wrapper.find('div#newScreen').text()
    expect(screenName.includes(activeId)).toEqual(true)
  })
  it('Add another screen', () => {
    wrapper.find('button#addButton').simulate('click')
    expect(wrapper.find('div#newScreen')).toHaveLength(2)
  })
  it('check second activeId', () => {
    const activeId = wrapper.find('span#activeId').text()
    const screenName = wrapper
      .find('div#newScreen')
      .last()
      .text()
    expect(screenName.includes(activeId)).toEqual(true)
  })
  it('delete last screen', () => {
    wrapper
      .find('button#deleteButton')
      .last()
      .simulate('click')
    expect(wrapper.find('div#newScreen')).toHaveLength(1)
  })
  it('check third activeId', () => {
    const activeId = wrapper.find('span#activeId').text()
    const screenName = wrapper.find('div#newScreen').text()
    expect(screenName.includes(activeId)).toEqual(true)
  })
  it('delete another screen', () => {
    wrapper.find('button#deleteButton').simulate('click')
    expect(wrapper.find('div#newScreen')).toHaveLength(0)
  })
  it('active id = 0', () => {
    expect(wrapper.find('span#activeId').text()).toEqual('0')
  })
})
