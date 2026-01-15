import React from "react";

import { ContentBlock } from "@/app/data/Blogtype";

export function BlogRender({ content }: { content: ContentBlock[] }) {
  return (
    <article className="max-w-3xl mx-auto px-2 md:px-0 ">
      {content?.map((block, i) => {
        /* ---------- HEADING ---------- */
        if (block.type === "heading") {
          const Tag = `h${block.level}` as keyof React.JSX.IntrinsicElements;

          const styles: Record<number, string> = {
            1: "text-4xl md:text-5xl font-bold tracking-tight mt-16 mb-4",
            2: "text-3xl md:text-4xl font-semibold tracking-tight mt-14 mb-3",
            3: "text-2xl md:text-3xl font-semibold mt-10 mb-2",
            4: "text-xl md:text-2xl font-medium mt-8 mb-2 text-gray-800",
          };

          return (
            <Tag key={i} className={styles[block.level]}>
              {block.text}
            </Tag>
          );
        }

        /* ---------- PARAGRAPH ---------- */
        if (block.type === "paragraph") {
          return (
            <p
              key={i}
              className="text-gray-700 text-lg leading-relaxed md:leading-loose"
            >
              {block.text}
            </p>
          );
        }

        /* ---------- LIST ---------- */
        if (block.type === "list") {
          return (
            <ul
              key={i}
              className="list-disc pl-6 space-y-2 text-gray-700 text-lg"
            >
              {block.items.map((item, j) => (
                <li key={j} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return null;
      })}
    </article>
  );
}
