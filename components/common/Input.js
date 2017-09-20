import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 8,
    fontSize: 20,
    lineHeight: 26,
    flex: 1,
    justifyContent: 'center'
  },
  labelStyle: {
    fontSize: 17,
    paddingLeft: 8,
    marginBottom: 5,
    flex: 1
  },
  containerStyle: {
    height: 45,
    flex: 1,
    marginBottom: 5,
  }
};

export { Input };
