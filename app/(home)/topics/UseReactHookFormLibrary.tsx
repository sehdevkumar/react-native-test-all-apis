import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Text,
  Pressable,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Colors } from "@/constants/Colors"; // Ensure this is correctly imported

type User = {
  name: string;
  mail: string;
};

function UseReactHookFormLibrary() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<User>({
    defaultValues: {
      name: "",
      mail: "",
    },
  });

  const submit: SubmitHandler<User> = async (data) => {
    // Simulate an API call delay
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Form Data:", data);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styleReachHookForm.safeStyle}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, padding: 20 }}
        >
          {/* Name Input */}
          <Controller
            control={control}
            name="name"
            rules={{
              required: "Name is required",
              maxLength: {
                value: 20,
                message: "Name cannot exceed 20 characters",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  style={[
                    styleReachHookForm.inputField,
                    errors.name && { borderColor: "red" },
                  ]}
                  placeholder="Enter your name"
                  placeholderTextColor="#aaa"
                  onChangeText={onChange}
                  value={value}
                />
                {errors.name && (
                  <Text style={styleReachHookForm.errorText}>
                    {errors.name.message}
                  </Text>
                )}
              </>
            )}
          />

          {/* Email Input */}
          <Controller
            control={control}
            name="mail"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <TextInput
                  style={[
                    styleReachHookForm.inputField,
                    errors.mail && { borderColor: "red" },
                  ]}
                  placeholder="Enter your email"
                  placeholderTextColor="#aaa"
                  keyboardType="email-address"
                  onChangeText={onChange}
                  value={value}
                />
                {errors.mail && (
                  <Text style={styleReachHookForm.errorText}>
                    {errors.mail.message}
                  </Text>
                )}
              </>
            )}
          />

          {/* Submit Button */}
          <Pressable
            style={[
              styleReachHookForm.button,
              isSubmitting && { backgroundColor: "#ccc" },
            ]}
            onPress={() => handleSubmit(submit)()}
            disabled={isSubmitting}
          >
            <Text style={styleReachHookForm.buttonText}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default UseReactHookFormLibrary;

const styleReachHookForm = StyleSheet.create({
  safeStyle: {
    flex: 1,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: Colors.light.background,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
  },
});
