import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useVerifyPhoneMutation } from '../../redux/features/auth/authApi';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../redux/features/auth/authSlice';
import Toast from 'react-native-toast-message';

export default function VerificationScreen() {
  const { phone, otp: initialOtp } = useLocalSearchParams<{ phone: string, otp: string }>();
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef<Array<TextInput | null>>([null, null, null, null]);
  const dispatch = useDispatch();

  const [verifyPhone, { isLoading }] = useVerifyPhoneMutation();

  useEffect(() => {
    if (initialOtp && initialOtp.length === 4) {
      setCode(initialOtp.split(''));
    }
  }, [initialOtp]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) {
      const pastedCode = text.slice(0, 4).split('');
      const newCode = [...code];
      pastedCode.forEach((char, i) => {
        newCode[i] = char;
      });
      setCode(newCode);
      const focusIndex = pastedCode.length < 4 ? pastedCode.length : 3;
      inputRefs.current[focusIndex]?.focus();
      return;
    }

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text !== '' && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const finalOtp = code.join('');
    if (finalOtp.length !== 4) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Code',
        text2: 'Please enter the 4-digit verification code.',
      });
      return;
    }

    try {
      const response = await verifyPhone({ 
        phone: phone, 
        otp: finalOtp 
      }).unwrap();

      if (response.status) {
        Toast.show({
          type: 'success',
          text1: 'Verified!',
          text2: 'Your phone number has been verified.',
        });

        dispatch(setCredentials({
          user: response.data,
          token: response.data.token,
          refreshToken: '', 
          device_token: '',
        }));

        router.push('/(tabs)/home');
      } else {
        Toast.show({
          type: 'error',
          text1: 'Verification Failed',
          text2: response.message || 'Invalid code.',
        });
      }
    } catch (error: any) {
      console.error('Verification error:', error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.data?.message || 'Failed to verify. Please try again.',
      });
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView 
        contentContainerStyle={styles.scrollContent} 
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Verification</Text>
            <Text style={styles.subtitle}>
              Enter the 4-digit code sent to {phone || 'your phone'}
            </Text>
          </View>

          <View style={styles.otpContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={el => inputRefs.current[index] = el}
                style={[styles.otpInput, digit !== '' && styles.otpInputFilled]}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                selectTextOnFocus
              />
            ))}
          </View>

          <TouchableOpacity style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't receive the code? <Text style={styles.resendLink}>Resend</Text></Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonContainer} 
            onPress={handleVerify} 
            activeOpacity={0.8}
            disabled={isLoading}
          >
            <LinearGradient
              colors={['#2563EB', '#60A5FA']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientButton}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.buttonText}>Verify</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
  },
  headerContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  otpInput: {
    width: 65,
    height: 70,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
  },
  otpInputFilled: {
    backgroundColor: '#EFF6FF', 
    borderColor: '#2563EB',
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  resendText: {
    fontSize: 15,
    color: '#6B7280',
  },
  resendLink: {
    color: '#2563EB',
    fontWeight: 'bold',
  },
  buttonContainer: {
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  gradientButton: {
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
