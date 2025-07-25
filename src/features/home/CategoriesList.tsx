"use client";

import { useEffect, useRef } from "react";
import { Category } from "./types";
import CategorySlider from "./CategorySlider";
import CategorySliderSkeleton from "./CategorySliderSkeleton";
import useGetCategoriesWithPosts from "@/hooks/queries/useGetCategoriesWithPosts";

export default function CategoriesList() {
  const { categories, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetCategoriesWithPosts();

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        rootMargin: "1200px",
      }
    );

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div className="space-y-12">
      {categories.map((category: Category) => (
        <CategorySlider key={category.value} category={category} />
      ))}

      {isFetchingNextPage && <CategorySliderSkeleton />}

      <div ref={observerRef} />
    </div>
  );
}
