import '@tanstack/react-query';
import { HTTPError } from 'ky';

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: HTTPError;
  }
}
