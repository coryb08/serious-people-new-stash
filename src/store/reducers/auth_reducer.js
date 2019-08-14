import * as Utility from "../../utility";
const defaultState = { user: null };
let defaultUser = {
  status: 0,
  gender: "",
  firstName: "",
  interestedIn: "",
  timePosted: "",
  blurb: "",
  facebook: "",
  location: {
    city: "",
    state: "",
    postcode: "",
    coordinates: {
      latitude: "",
      longitude: ""
    },
    timezone: {
      offset: ""
    }
  },

  login: {
    _lat: "",
    refreshToken: "",
    uid: "",
    displayName: null,
    photoURL: null,
    email: "",
    emailVerified: false,
    phoneNumber: null,
    isAnonymous: false,
    metadata: {
      a: "",
      b: "",
      lastSignInTime: "",
      creationTime: ""
    },
    providerData: [
      {
        uid: "",
        displayName: null,
        photoURL: null,
        email: "",
        phoneNumber: null,
        providerId: ""
      }
    ]
  },
  dob: {
    date: "",
    age: ""
  },
  registered: {
    date: ""
  },
  id: {
    name: "",
    value: ""
  },
  pictures: { "0": "", "1": "", "2": "", "3": "", "4": "" },
  nat: "",
  conversations: []
};
export default function(state = defaultState, action) {
  switch (action.type) {
    case "SET_AUTH":
      if (!action.payload.email) {
        console.log("no email credential");
        return defaultUser;
      } else {
        return Utility.convertAuthResponse(defaultUser, action.payload);
      }
    default:
      return defaultUser;
  }
}
