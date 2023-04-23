import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Repo } from "../../../types";
import Image from "next/image";
import Link from "next/link";

interface RepoProps {
  data: Repo;
}

export default function Repos({ data }: RepoProps) {
  return (
    <>
      <div>{data.name}</div>
      <Link href={data.html_url}>{data.html_url}</Link>
      <div>{data.language}</div>
      <div>{data.homepage}</div>
      <div>{data.created_at.toString()}</div>
      <Image
        src={data.owner.avatar_url}
        alt="Avatar"
        width={50}
        height={50}
        className="rounded-full"
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  const resp = await fetch("https://api.github.com/users/LuanGrod/repos");
  const repos = await resp.json();

  const selectedRepo = repos.filter((repo: Repo) => repo.id.toString() === id)[0];

  return {
    props: {
      data: selectedRepo,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const resp = await fetch("https://api.github.com/users/LuanGrod/repos");
  const repos = await resp.json();

  const paths = repos.map((repo: Repo) => ({
    params: { id: repo.id.toString() },
  }));

  //console.log(paths);

  return { paths, fallback: false };
};
