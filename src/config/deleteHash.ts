export const deleteHash = () => {
  setTimeout(() => {
    // eslint-disable-next-line no-restricted-globals
    history.replaceState("", document.title, window.location.pathname);
  }, 0);
};
