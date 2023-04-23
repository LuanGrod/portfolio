import { GetStaticProps } from "next";
import React from "react";
import { Repo } from "../../../types";
import Link from "next/link";

interface ReposProps {
  data: Repo[];
}

export default function index({ data }: ReposProps) {
  console.log(data[0]);

  return (
    <>
      <ul>
        {data.map((repo) => (
          <li key={repo.id}>
            <Link href={`/repos/${encodeURIComponent(repo.id)}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const resp = await fetch("https://api.github.com/users/LuanGrod/repos");
  const repos = await resp.json();

  return {
    props: {
      data: repos,
    },
  };
};
