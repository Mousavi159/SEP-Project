import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../componets/Background'
import BackButton from '../componets/BackButton'
import Logo from '../componets/Logo'
import Header from '../componets/Header'
import TextInput from '../componets/TextInput'
import Button from '../componets/Button'
import { emailValidator } from '../helper/emailValidator'
import { theme } from '../core/theme'

export default function ResetScreen({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' })
  
    const sendResetPasswordEmail = () => {
      const emailError = emailValidator(email.value)
      if (emailError) {
        setEmail({ ...email, error: emailError })
        return
      }
      navigation.navigate('LoginScreen')
    }
  
    return (
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Restore Password</Header>
        <TextInput
          label="E-mail address"
          returnKeyType="done"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"          
          
        />
        <Text style={styles.word}>You will receive email with password reset link. </Text>
        <Button
          mode="contained"
          onPress={sendResetPasswordEmail}
          style={{ marginTop: 16 }}
        >
          Send Instructions
        </Button>
      </Background>
    )
  }
  const styles = StyleSheet.create({
    word: {
      color: theme.colors.text, 
      fontSize: 13,
    },
  });
  