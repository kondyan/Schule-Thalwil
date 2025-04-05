import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectUsers = (state) => state.auth.users.data;

export const selectRoles = (state) => state.auth.user.role;

export const selectisRefreshingUsers = (state) => state.auth.users.isRefreshing;

export const selectPostsByUserId = (state) => state.auth.posts;

export const selectTutorialsByUserId = (state) => state.auth.tutorials;

const selectFilterStatus = (state) => state.filters.status;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilterStatus],
  (users, filter) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
