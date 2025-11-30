export type ResourceStoreResult<T = unknown> =
  | { loading: true }
  | { loading: false; error: Error }
  | {
      loading: false;
      error?: undefined;
      finalUrl: string;
      headers: Headers;
      contentType: string;
      data: T;
    };

export interface ResourceStoreOptions {
  accept?: string;
}

export type ResourceStoreUnsubscribe = () => void;

export type ResourceStoreCallback<T = unknown> = (
  result: ResourceStoreResult<T>
) => void;

export interface ResourceStore {
  subscribe<T = unknown>(
    uri: string,
    options: ResourceStoreOptions,
    callback: ResourceStoreCallback<T>
  ): ResourceStoreUnsubscribe;

  invalidate(uri: string, options?: ResourceStoreOptions): void;
}
