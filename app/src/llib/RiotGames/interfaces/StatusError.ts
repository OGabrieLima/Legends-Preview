
export interface StatusError {
  status: {
    readonly status_code: number;
    readonly message:     string;
  }
}