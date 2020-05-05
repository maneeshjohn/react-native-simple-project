import React from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Users from '../screens/User'
import { mount } from 'enzyme'
import * as dependencies from '../redux/actions/userActions'

const mockStore = configureMockStore()
const store = mockStore({
  userState: {
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
    },
    users: []
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

    let props = createTestProps({})
    beforeEach(() => {
      props = {
        navigation: {
          navigate: jest.fn(() => console.log("called")),
        }
      };

      Object.defineProperty(dependencies, 'getUsers', {
        value: jest.fn(() => {
          return () => {
            console.log("mock fn");
            return new Promise((res, rej) => {
              res('done');
            })
          }
        })
      });
      Object.defineProperty(dependencies, 'getSingleUser', {
        value: jest.fn(() => {
          return () => {
            console.log("mock fn");
            return new Promise((res, rej) => {
              res('done');
            })
          }
        })
      });
    })
    const wrapper = mount(
      <Provider store={store}>
        <Users {...props} />
      </Provider>
    )

    it('Activity indicator should be large', async () => {
      expect(wrapper.find(Text)).toHaveLength(12)
    })
  })
})