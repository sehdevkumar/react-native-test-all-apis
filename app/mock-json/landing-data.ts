export type LandingPageDataType = {
  topicName: string;
  description: string;
  imagePath?: "";
};

export const LandingData: LandingPageDataType[] = [
  {
    topicName: "Zod Schema",
    description:
      "This topic is about how to setup a basic Zod Schema and use into the Form Validation",
  },
  {
    topicName: "Justand Setup",
    description:
      "This is about what is Justand and how to use it and Why is different from Context API, Redux",
  },
  {
    topicName: "React Query",
    description: "How to make API calls and error handling using the React Query instaed using the Traditional UseEffect and Redux Thunk Store",
  },
];
