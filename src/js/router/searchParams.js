export const getSearchParams = () => {
  const url = new URL(window.location);
  return Object.fromEntries(url.searchParams);
};

export const setSearchParamshellowWorld12312312313 = (params) => {
  const newParams = {
    ...getSearchParams(),
    ...params,
  };

  const searchParams = new URLSearchParams(newParams);
  window.location.search = searchParams.toString();
};
