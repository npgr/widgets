import React from 'react'
import { shallow } from 'enzyme'
import App from '../js/containers/App'
import Block from '../js/components/StyledComponents/Block'
import Button from '../js/components/StyledComponents/Button'
import { Header } from '../js/components/Header'
import { LeftBar } from '../js/components/LeftBar'
import { CentralArea } from '../js/components/CentralArea'
import { RightBar } from '../js/components/RightBar'

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App />)
    expect(component).toMatchSnapshot()
  })
})

describe('<Header />', () => {
  it('renders 1 <Header /> component', () => {
    const component = shallow(<Header />)
    expect(component).toMatchSnapshot()
  })
})

describe('<Block />', () => {
  it('renders 1 <Block /> component', () => {
    const component = shallow(<Block>Prueba</Block>)
    expect(component).toMatchSnapshot()
  })
})

describe('<Button />', () => {
  it('renders 1 <Button /> component', () => {
    const component = shallow(<Button>Prueba</Button>)
    expect(component).toMatchSnapshot()
  })
})

describe('<LeftBar />', () => {
  it('renders 1 <LeftBar /> component', () => {
    const component = shallow(<LeftBar />)
    expect(component).toMatchSnapshot()
  })
})

describe('<RightBar />', () => {
  it('renders 1 <RightBar /> component', () => {
    const component = shallow(<RightBar />)
    expect(component).toMatchSnapshot()
  })
})

describe('<CentralArea />', () => {
  it('renders 1 <CentralArea /> component', () => {
    const component = shallow(<CentralArea />)
    expect(component).toMatchSnapshot()
  })
})
