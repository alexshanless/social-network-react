import { createSelector } from "reselect";

const getUserSelector = (state) => {
  return state.usersPage.users;
};

export const getUser = createSelector(getUserSelector, (users) => {
  return users.filter((u) => true);
});
export const getPagesize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
