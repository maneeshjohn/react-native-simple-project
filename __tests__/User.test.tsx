import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import User from '../screens/User'
import { shallow } from 'enzyme'

const mockStore = configureMockStore()
const store = mockStore({
  user: {
    name: {
      first: '',
      last: ''
    },
    email: '',
    phone: '',
    cell: '',
    login: {
      username: ''
    },
    picture: {
      thumbnail: '',
      medium: ''
    },
    dob: {
      age: ''
    },
    location: {
      city: '',
      country: '',
      state: ''
    }
  }
})

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
})

describe('Users screen', () => {
  describe('rendering', () => {

    const props = createTestProps({})
    const wrapper = shallow(
      <Provider store={store}>
        <User { ...props } />
      </Provider>
    )

    it('should render a view', () => {
      expect(wrapper.find('.user-wrapper')).toHaveLength(0)
    })
  })
})