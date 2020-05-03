import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Users from '../screens/User'
import { shallow } from 'enzyme'

const mockStore = configureMockStore()
const store = mockStore({})

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

describe('Users screen', () => {
  describe('rendering', () => {

    const props = createTestProps({ user: { name: { first: '', last: '' } } })
    const wrapper = shallow(
      <Provider store={store}>
        <Users { ...props } />
      </Provider>
    )

    it('should render a view', () => {
      expect(wrapper.find('.user-wrapper')).toHaveLength(0)
    })
  })
})