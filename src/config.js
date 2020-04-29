export default {
  s3: {
    REGION: "us-west-2",
    BUCKET: "telpochyaotl.serverless-stack.notes.uploads"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://k39bltvxng.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_IsMu68Mqb",
    APP_CLIENT_ID: "5v238jv445hvpnd7boh0ieomie",
    IDENTITY_POOL_ID: "us-west-2:16a8fa78-2b8c-4bc8-965d-675e6ab1f616",
  }
};
