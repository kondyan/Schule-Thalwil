export const selectPosts = (state) => state.posts.data;

export const selectIsRefreshing = (state) => state.posts.isRefreshing;

export const selectCurrentPost = (state) => state.posts.currentPost.data;

export const selectCurrentPostIsRefreshing = (state) =>
  state.posts.currentPost.isRefreshing;

export const selectPreviewImage = (state) => state.posts.previewImage;
