import React from 'react'
import Background from '../componets/Background'
import Logo from '../componets/Logo'
import Header from '../componets/Header'
import Button from '../componets/Button'
import Paragraph from '../componets/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>RECOVERY LAB</Header>
      <Paragraph>
        Your online recovery center.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('SignupScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}