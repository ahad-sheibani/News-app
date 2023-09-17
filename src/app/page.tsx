"use client";

import Image from "next/image";
import Head from "next/head";
import React, { useEffect } from "react";
import type { GetServerSideProps } from "next";
import { NewsArticle, NewsResponse } from "../../models/NewsArticles";

export const metadata = {
  title: "Breaking News!",
};

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[];
}
export const getServerSideProps: GetServerSideProps<
  BreakingNewsPageProps
> = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=a071ef358ee948d099af32399dd123db`
  );
  const newsResponse: NewsResponse = await response.json();
  console.log("ahad", response);
  return {
    props: { newsArticles: newsResponse.articles },
  };
};

export default function Home({ newsArticles }: BreakingNewsPageProps) {
  {
    console.log("aaaaaaaaa", newsArticles);
  }
  return (
    <>
      <main className="">
        <h1>Breaking News </h1>
        {JSON.stringify(newsArticles)}
      </main>
    </>
  );
}
