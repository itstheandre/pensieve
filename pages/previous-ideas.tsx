import * as React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Idea } from "@prisma/client";
import { AllPreviousIdeas } from "../prisma";

const fetcher = async () =>
  axios.get("/api/idea").then((r) => {
    return r.data;
  });

export default function Previous() {
  const { data, error, isLoading } = useQuery<AllPreviousIdeas>(
    "previous",
    fetcher
  );
  console.log("data:", data);
  // console.log("some:", some);

  React.useEffect(() => {
    console.log("INSIDE USE EFFECT");
    axios.post("/api/idea").then((re) => {
      console.log("INSIDE AXIOS POST");
      console.log(re);
      console.log(re.data);
    });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <ul>
        {data.map((el) => (
          <li>
            Hello {el.description}, added by: {el.user.name}
          </li>
        ))}
      </ul>
    </>
  );
}
