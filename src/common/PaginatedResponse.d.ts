declare global {
  type PaginatedResponse<T> = {
    success: boolean;
    message: string;
    data: {
      items: T;
      total: number;
      page: number;
      limit: number;
    };
  };
}
export {};
