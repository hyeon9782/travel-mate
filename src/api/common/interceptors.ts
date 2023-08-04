export function setInterceptors(instance: any) {
  instance.interceptors.request.use(
    function (config: any) {
      return config;
    },
    function (error: any) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response: any) {
      return response;
    },
    function (error: any) {
      return Promise.reject(error);
    }
  );

  return instance;
}
