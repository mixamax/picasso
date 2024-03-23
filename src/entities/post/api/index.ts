import { appApi } from "../../../shared/api/baseQuery";
import { Post } from "../../../shared";

const postApi = appApi.injectEndpoints({
    endpoints: (build) => ({
        post: build.query<Post[] | Post, string>({
            query: (id = "") => `posts/${id && `${id}`}`,
        }),
    }),
    overrideExisting: false,
});

export const { usePostQuery } = postApi;
