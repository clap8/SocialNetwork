class ExtendableError extends Error {
  public name: string;
  public description: string;
  public code: number;
  public status: number;
  public isPublic: boolean;

  constructor(description: string, code: number, status: number, isPublic: boolean) {
    super(description);
    this.name = this.constructor.name;
    this.description = description;
    this.code = code;
    this.status = status;
    this.isPublic = isPublic;
    Error.captureStackTrace(this);
  }

  toJSON() {
    return {
      "name": this.name,
      "description": (this.isPublic) ? this.description : null,
      "code": (this.isPublic) ? this.code : null,
      "status": this.status
    }
  }
}

export default ExtendableError;