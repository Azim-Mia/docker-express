export class GeneralError extends Error {
  constructor(message){
    super();
    this.message = message
  }
}
export class badRequest extends GeneralError{
constructor(message){
    super(message);
    this.name= "badRequest";
  }
  getCode() { return 400;}
}
export class notFound extends GeneralError{
  constructor(message){
    super(message);
    this.name= "User error ";
  }
  getCode () { return 404;}
}
