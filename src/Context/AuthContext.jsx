// eslint-disable react/prop-types
import { createContext, useState } from "react";
import { auth } from "../supabase";

export const SessionContext = createContext(null);

export const SessionContextProvider = (props) => {
  // state variable to manage the state of the user auth
  const [sessionState, setSessionState] = useState(0);
  // if session == false then user is not logged in
  // if it changes to true then user has signed up
  // and show a Notification when the user logs in and logs out

  const subscription = auth.onAuthStateChange((event, session) => {
    // console.log('Event:', event);
    if (event === "INITIAL_SESSION") {
      // handle initial session sign up
      setSessionState(1);
    } else if (event === "SIGNED_IN") {
      // handle sign in event
      setSessionState(2);
    } else if (event === "SIGNED_OUT") {
      // handle sign out event
      setSessionState(3);
    } else if (event === "PASSWORD_RECOVERY") {
      // handle password recovery event
      setSessionState(4);
    }
  });

  return (
    <SessionContext.Provider value={sessionState}>
      {props.children}
    </SessionContext.Provider>
  );
};
