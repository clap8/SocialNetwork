import * as HttpStatus from 'http-status-codes'
import ExtendableError from '@lib/errors/extendable-error';
//--------------------------------------------------------------------------------------------

class APIError extends ExtendableError {
  public data: any;

  constructor(description: string, code: number, status: number = HttpStatus.INTERNAL_SERVER_ERROR, isPublic: boolean = false, data: any = {}) {
    super(description, code, status, isPublic);
    this.data = data;
  }

  toJSON(): any {
    return {
      "name": this.name,
      "description": (this.isPublic) ? this.description : null,
      "code": this.code,
      "status": this.status,
      "data": (this.isPublic) ? this.data : null
    }
  }
}

const APICodes = {
  // GENERAL ERROR
  // [1000 - 1099]
  INVALID_DATA_FORM:                1000,
  DUPLICATE_KEY:                    1001,
  ENTITY_NOT_FOUND:                 1002,
  INVALID_MONGO_ID:                 1003,
  AUTH_ACCOUNT_NOT_EXIST:           1004,
  AUTH_PASSWORD_WRONG:              1005,
  AUTH_NO_TOKEN:                    1006,
  AUTH_INVALID_TOKEN:               1007,
  AUTH_ACCESS_FORBIDDEN:            1008,
  ACL_INTERNAL_ERROR:               1009,
  RESET_PASSWD_ERROR:               1010,
  
  // USER ERROR
  // [1100 - 1199] - USER
  NONE:                             1100
};

export { APIError, APICodes, HttpStatus };