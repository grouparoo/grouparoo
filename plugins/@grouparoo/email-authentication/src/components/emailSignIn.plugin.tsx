import React from "react"; // needed so help TS know what to compile in
import SignIn from "@grouparoo/core/web/components/forms/session/signIn";

export default function (props) {
  return (
    <>
      <SignIn {...props} />
    </>
  );
}
