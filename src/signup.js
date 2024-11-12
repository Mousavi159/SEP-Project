import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SignUpPage = ({ navigation }) => {
    const [Fullname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setrePassword] = useState('');
    const [Phone, telphone] = useState('');
    const [dateofbirth, setBirth] = useState('');
  
    
};