"use client";

import PostCardSkeleton from "@/components/loaders/PostCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategorySliderSkeleton() {
  return (
    <section className="py-16 even:bg-[#f5f5f5]">
      <div className="container space-y-8">
        <div className="space-y-3 px-2">
          <Skeleton className="h-4 w-80 rounded  bg-gray-200" />
          <Skeleton className="h-6 w-3xl rounded  bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <PostCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
