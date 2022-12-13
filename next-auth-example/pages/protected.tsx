import { NextPage } from "next";
import { useSession, getCsrfToken } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";

const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession();

  const csrfToken = async () => {
    const csrfToken = await getCsrfToken();
    console.log(csrfToken);
  };

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
    csrfToken();
  }, [status]);

  if (status === "authenticated")
    return (
      <div>
        This page is Protected for special people. like {"\n"}
        {JSON.stringify(data.user, null, 2)}
      </div>
    );
  return <div>Loading...</div>;
};

export default Protected;
