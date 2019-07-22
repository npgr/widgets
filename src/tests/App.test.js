import React from 'react'
import { shallow } from 'enzyme'
import App from '../js/containers/App'

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App />)
    expect(component).toMatchSnapshot()
  })
})
