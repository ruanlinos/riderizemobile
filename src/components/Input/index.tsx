import React, {
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps, Text, TextInput, View } from 'react-native';
import { useField } from '@unform/core';
import styles from './styles';

interface InputProps extends TextInputProps {
  name: string;
  label: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const handleInputFocus = useCallback(() => {}, []);

  const handleInputBlur = useCallback(() => {}, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.labelText}>{label}</Text>}
      <TextInput
        ref={inputElementRef}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        autoCapitalize="none"
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </View>
  );
};

export default forwardRef(Input);
