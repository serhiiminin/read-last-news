import ExtendableError from 'es6-error';


class ApiError extends ExtendableError {
  constructor(data, response, request) {
    const message = (
      data && (
        (data.status === 'error' && data.error)
        || (data.status === 'invalid' && `Invalid request: ${JSON.stringify(data.invalid)}`)
        || data.message
      )
    ) || response.statusText;

    super(message);

    this.data = data;
    this.response = response;
    this.request = request;
  }
}

export default { ApiError };
