export default () => ({
  Authorization: `Bearer ${localStorage.token || ""}`,
});
