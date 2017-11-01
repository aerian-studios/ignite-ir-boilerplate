// @flow
import { ApiResponse } from 'apisauce'
import { path } from 'ramda'
import { call, put } from 'redux-saga/effects'
import { GithubActions } from '../Redux/GithubRedux'
import type { GithubAction, ImmutableGithubState } from '../Redux/GithubRedux'
import type { GithubApi, GithubResponse, GithubUser } from '../Services/Api'

export function * getUserAvatar (api: GithubApi, action: GithubAction):Iterable<ImmutableGithubState> {
  const { username } = action
  // make the call to the api
  const response: ApiResponse<GithubResponse> = yield call(api.getUser, username || '')

  if (response.ok) {
    const firstUser = (path(['data', 'items'], response):GithubUser[])[0]
    const avatar = firstUser.avatar_url
    // do data conversion here if needed
    yield put(GithubActions.userSuccess(avatar))
  } else {
    yield put(GithubActions.userFailure())
  }
}
