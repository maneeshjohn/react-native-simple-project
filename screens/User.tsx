import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import styles from '../styles/global'
import { User, Storetype } from '../types/types'

type Props = {
  user: User
}

export const UserDetails = ({ user }: Props) => {

  const { container, headerText, userCard, cardName, cardEmail, profile, profileContainer } = styles

  return (
    <View style={container} testID="user-wrapper">
      <View style={ profileContainer }>
        <Image style={ profile } source={{ uri: user.picture.medium }} />
      </View>
      <Text style={headerText}>Account Details</Text>
      <View style={{ ...userCard, flexDirection: 'column', alignItems: 'flex-start' }}>
        <Text style={cardName}>{ `${user.name.first} ${user.name.last}` }</Text>
        <Text style={cardEmail}>{ user.login.username }</Text>
        <Text style={cardEmail}>{ user.email }</Text>
      </View>
      <Text style={headerText}>Address</Text>
      <View style={{ ...userCard, flexDirection: 'column', alignItems: 'flex-start' }}>
        <Text style={cardEmail}>City: { user.location.city }</Text>
        <Text style={cardEmail}>Country: { user.location.country }</Text>
        <Text style={cardEmail}>State: { user.location.state }</Text>
      </View>
      <Text style={headerText}>Personal Details</Text>
      <View style={{ ...userCard, flexDirection: 'column', alignItems: 'flex-start' }}>
        <Text style={cardEmail}>Age: { user.dob.age }</Text>
        <Text style={cardEmail}>Phone: { user.phone }</Text>
        <Text style={cardEmail}>Mobile: { user.cell }</Text>
      </View>
    </View>
  )
}

const mapStateToProps = (state: Storetype) => ({
  user: state.userState.user
})

export default connect(mapStateToProps)(UserDetails)