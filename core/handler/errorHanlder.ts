import { IErrorHandler } from "core/types"

export class ErrorHandler implements IErrorHandler {
  public errorHandler = (promise: Promise<unknown>) =>
    promise.then((response) => [null, response]).catch((error) => [error])
}