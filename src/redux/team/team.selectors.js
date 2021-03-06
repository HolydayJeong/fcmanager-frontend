import { createSelector } from 'reselect';

const selectTeam = state => state.team;

export const selectTeams = createSelector(
    [selectTeam],
    team => team.teams
)

export const selectIsTeamFetching = createSelector(
    [selectTeam],
    team => team.isFetching
)

export const selectIsTeamsLoaded = createSelector(
    [selectTeam],
    team => !!team.teams
)