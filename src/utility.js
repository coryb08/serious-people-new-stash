export const convertAuthResponse = (defaultUser, payload) => {
  let filtered = {};

  let keyArray = Object.keys(payload);

  keyArray.map(ele => {
    if (ele.toString().length > 2) {
      filtered[ele] = payload[ele];
    }
  });
  let updatedUserState = {
    ...defaultUser,
    ...filtered,
    status: 1
  };
  return updatedUserState;
};
