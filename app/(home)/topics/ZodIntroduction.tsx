import { MarkDownStyle } from "@/constants/MarkDownStyle";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Markdown from "react-native-markdown-display";

function ZodIntroduction() {
  const whatIsZod = 
  `
# Zod Examples with Definitions

Zod is a powerful schema declaration and validation library for TypeScript. It helps ensure type safety and validate runtime data structures.

---

### 1. **Basic Schema Validation**
**Definition:**  
A basic schema allows you to validate simple data structures, ensuring they match the expected type and rules.

\`\`\`typescript
import { z } from "zod";

const userSchema = z.object({
  name: z.string(), // Must be a string
  age: z.number().int().min(18), // Must be an integer and at least 18
});

const user = { name: "John", age: 25 };

try {
  userSchema.parse(user); // Validation successful
} catch (e) {
  console.error(e.errors); // Validation errors will be printed here
}
\`\`\`

---

### 2. **Nested Object Validation**
**Definition:**  
Nested schemas are useful for validating hierarchical or complex object structures.

\`\`\`typescript
const profileSchema = z.object({
  user: z.object({
    id: z.string(), // User ID as a string
    email: z.string().email(), // Must be a valid email
  }),
  createdAt: z.date(), // Must be a valid date
});

const profile = {
  user: { id: "123", email: "test@example.com" },
  createdAt: new Date(),
};

profileSchema.parse(profile); // Validation successful
\`\`\`

---

### 3. **Union Types**
**Definition:**  
Union schemas allow for multiple possible structures, validating against one of the specified options.

\`\`\`typescript
const responseSchema = z.union([
  z.object({ status: z.literal("success"), data: z.string() }), // Success response
  z.object({ status: z.literal("error"), message: z.string() }), // Error response
]);

const response = { status: "success", data: "All good!" };

responseSchema.parse(response); // Validation successful
\`\`\`

---

### 4. **Custom Error Messages**
**Definition:**  
Custom error messages help provide more user-friendly feedback during validation.

\`\`\`typescript
const passwordSchema = z.string().min(8, {
  message: "Password must be at least 8 characters long.",
});

try {
  passwordSchema.parse("12345"); // Will throw an error
} catch (e) {
  console.error(e.errors); // Outputs the custom error message
}
\`\`\`

---

### 5. **Transforming Data**
**Definition:**  
Zod transformations let you modify or reshape data during validation.

\`\`\`typescript
const userSchema = z.object({
  firstName: z.string(), // First name as a string
  lastName: z.string(), // Last name as a string
}).transform((data) => ({
  fullName: 'data.firstName' + 'data.lastName', // Combine first and last names
}));

const transformed = userSchema.parse({ firstName: "John", lastName: "Doe" });

console.log(transformed.fullName); // "John Doe"
\`\`\`

---

### Benefits of Using Zod
- **Type Safety:** Automatically infers TypeScript types from schemas.
- **Runtime Validation:** Ensures data integrity during runtime.
- **Flexible:** Supports complex, nested, and union schemas.
- **Readable Error Messages:** Enables custom error handling for better UX.

These examples demonstrate how Zod enhances validation and type safety for your React Native projects. 🎉
`

  return (
    <ScrollView
      style={{
        padding: 15,
        flex: 1,
      }}
    >
      <Markdown style={MarkDownStyle}>{whatIsZod}</Markdown>
    </ScrollView>
  );
}

export default ZodIntroduction;
