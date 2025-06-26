import { MOCK_POSTS } from "../@mock/post.mock";

export const _http_posts = {
  _get_posts,
};

async function _get_posts(): Promise<PaginatedResponse<PostType[]>> {
  try {
    const response: PaginatedResponse<PostType[]> = {
      success: true,
      message: "Posts fetched",
      data: {
        items: MOCK_POSTS(),
        total: 50,
        page: 1,
        limit: 10,
      },
    };
    return new Promise((res) => res(response));
  } catch (error: any) {
    console.error("Failed to fetch posts:", error);
    throw error;
  }
}
