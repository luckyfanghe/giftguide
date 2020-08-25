import types from "./types";

export const openSidebar = sidebarStyle => ({
  type: types.AUTH.OPENSIDEBAR,
  sidebarStyle
});

export const closeSidebar = () => ({
  type: types.AUTH.CLOSESIDEBAR
});

export const doingAuth = state => ({
  type: types.AUTH.DOINGAUTH,
  state
});
