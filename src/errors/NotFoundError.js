class NotFoundError extends Error {
  constructor(resourceType, id) {
    super(`${resourceType} with id111 ${id} was not found!`);
    this.name = "NotFoundError";
  }
}

export default NotFoundError;