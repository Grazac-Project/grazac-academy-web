const fetchCourses = () =>
  fetch("https://grazacacademy.com/graduate/courses").then((resp) => {
    return resp.json();
  });

const suspend = (promise) => {
  let result;
  let status = "pending";
  const suspender = promise.then(
    (response) => {
      status = "success";
      result = response;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );
  return () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw result;
      default:
        return result;
    }
  };
};

export default suspend(fetchCourses());
