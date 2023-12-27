export interface Response<type> {
  readonly status_code:   number;
  readonly data:          type;
}