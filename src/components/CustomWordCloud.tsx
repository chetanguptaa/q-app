"use client";

import React from "react";
import D3WordCloud from "react-d3-cloud";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

type Props = {
  formattedTopics: {
    text: string;
    value: number;
  }[];
};

const fontSizeMapper = (word: { value: number }) =>
  Math.log2(word.value) * 5 + 16;

const CustomWordCloud = ({ formattedTopics }: Props) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <>
      <D3WordCloud
        data={formattedTopics}
        height={550}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme === "dark" ? "white" : "black"}
        onWordClick={(e, d) => {
          router.push("/quiz?topic=" + d.text);
        }}
      />
    </>
  );
};

export default CustomWordCloud;
