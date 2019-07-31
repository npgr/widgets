import React from 'react'
import { mount } from 'enzyme'
import App from '@app/containers/App'
// import Block from '../js/components/StyledComponents/Block'
// import Button from '../js/components/StyledComponents/Button'
// import { Header } from '../js/components/Header'
// import { LeftBar } from '../js/components/LeftBar'
// import { CentralArea } from '../js/components/CentralArea'
// import { RightBar } from '../js/components/RightBar'

const ADD_BUTTON = 'button#addButton'
const NEW_SCREEN = 'div#newScreen'
const ACTIVE_ID = 'span#activeId'
const DELETE_BUTTON = 'button#deleteButton'

describe('<App />', () => {
  const wrapper = mount(<App />)
  // beforeEach(() => {
  //   wrapper = mount(<App />)
  // })
  it('Render <App />, check initial snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Add one screen', () => {
    wrapper.find(ADD_BUTTON).simulate('click')
    expect(wrapper.find(NEW_SCREEN)).toHaveLength(1)
  })

  it('check activeId', () => {
    const activeId = wrapper.find(ACTIVE_ID).text()
    const screenName = wrapper.find(NEW_SCREEN).text()
    expect(screenName.includes(activeId)).toEqual(true)
  })

  it('Add another screen', () => {
    wrapper.find(ADD_BUTTON).simulate('click')
    expect(wrapper.find(NEW_SCREEN)).toHaveLength(2)
  })

  it('check second activeId', () => {
    const activeId = wrapper.find(ACTIVE_ID).text()
    const screenName = wrapper
      .find(NEW_SCREEN)
      .last()
      .text()
    expect(screenName.includes(activeId)).toEqual(true)
  })

  it('Select first screen', () => {
    const firstScreen = wrapper.find(NEW_SCREEN).first()
    const screenName = firstScreen.text()
    firstScreen.simulate('click')
    const activeId = wrapper.find(ACTIVE_ID).text()
    expect(screenName.includes(activeId)).toEqual(true)
  })

  it('delete last screen', () => {
    wrapper
      .find(DELETE_BUTTON)
      .last()
      .simulate('click')
    expect(wrapper.find(NEW_SCREEN)).toHaveLength(1)
  })

  it('check third activeId', () => {
    const activeId = wrapper.find(ACTIVE_ID).text()
    const screenName = wrapper.find(NEW_SCREEN).text()
    expect(screenName.includes(activeId)).toEqual(true)
  })

  it('delete another screen', () => {
    wrapper.find(DELETE_BUTTON).simulate('click')
    expect(wrapper.find(NEW_SCREEN)).toHaveLength(0)
  })

  it('active id = 0', () => {
    expect(wrapper.find(ACTIVE_ID).text()).toEqual('0')
  })
})
