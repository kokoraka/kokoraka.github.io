
export const ACTION_SUCCESS = 1000;
export const ACTION_FAILED = 1001;
export const INVALID_PARAM = 1002;
export const ACTION_FORBIDDEN = 1003;
export const RESOURCE_NOTFOUND = 1004;
export const COMMUNICATION_ERROR = 1006;
export const RESOURCE_EXISTS = 1007;
export const INVALID_PRECONDITION = 1009;
export const NETWORK_ERROR = 1010;
export const UNEXPECTED_ERROR = 1011;

export class Status {

  constructor(public message: string, public code: number) { }

  public Any(codes: number[]): boolean {
    return Status.Any(this.code, codes)
  }

  public static Any(code: number, codes: number[]): boolean {
    let valid = false
    for (let i = 0; i < codes.length; i++) {
      if (code === codes[i]) {
        valid = true
        break
      }
    }
    return valid
  }

}
