import React, { useState, useEffect } from "react";
import { Counter } from "../components";
import { useCallApi } from "../hooks";
import { api } from "../api";

export const Homepage = () => {
  const [users, setUsers] = useState(undefined);
  const { loading, data, error } = useCallApi(
    "https://reqres.in/api/users?delay=3"
  );

  useEffect(() => {
    !loading && error === undefined && setUsers(data);
  }, [loading, error, data]);

  useEffect(() => {
    api.login({ email: "alex.zmed@itschool.ro", password: "11111111" });
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
      <Counter />
      {loading ? <h1>Please wait...</h1> : <pre>{JSON.stringify(users)}</pre>}
    </div>
  );
};
