export const selectCampers = state => state.campers.items;

export const selectSelectedCamper = state =>
  state.campers.selectedCamper;

export const selectCampersTotal = state => state.campers.total;

export const selectCampersPage = state => state.campers.page;

export const selectCampersStatus = state => state.campers.status;

export const selectCampersLoading = state =>
  state.campers.isLoading;

export const selectCampersError = state => state.campers.error;