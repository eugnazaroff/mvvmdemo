import {Button, SafeAreaView, TextInput, View} from 'react-native';
import React from 'react';
import {useInput} from '../../../app/presentation/hooks';
import {useTranslation} from 'react-i18next';

export const AuthScreen = () => {
  const {t} = useTranslation();
  const email = useInput({placeholder: t('auth.email')});
  const password = useInput({placeholder: t('auth.password')});

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{justifyContent: 'center', flex: 1}}>
        <TextInput
          autoCapitalize={'none'}
          autoComplete={'email'}
          keyboardType={'email-address'}
          style={{fontSize: 16}}
          placeholder={email.placeholder}
          value={email.value}
          onChangeText={email.handleChange}
        />
        <TextInput
          autoCapitalize={'none'}
          autoComplete={'password'}
          style={{fontSize: 16}}
          secureTextEntry
          placeholder={password.placeholder}
          value={password.value}
          onChangeText={password.handleChange}
        />
        <Button title={t('auth.login')} />
      </View>
    </SafeAreaView>
  );
};
