export const getAPIURL = () => {
  console.log(process.env.NODE_ENV);

  return process.env.NODE_ENV === "development"
    ? "http://localhost:7000/report"
    : "http://api-server:7000";
};
