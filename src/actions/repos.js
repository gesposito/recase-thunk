import api from "../api";

export const REQUEST_REPOS = "REQUEST_REPOS";
export const RECEIVE_REPOS = "RECEIVE_REPOS";

const requestRepos = profile => {
  return {
    type: REQUEST_REPOS,
    profile
  };
};

const receiveRepos = (profile, repos) => {
  return {
    type: RECEIVE_REPOS,
    profile,
    repos: repos
  };
};

export const fetchRepos = profile => {
  return dispatch => {
    dispatch(requestRepos(profile));
    return api
      .get(profile)
      .then(response => dispatch(receiveRepos(profile, response)));
  };
};
