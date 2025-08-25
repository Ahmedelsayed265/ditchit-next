import { getCategories } from "@/services/getCategories";
import { getQueryClient } from "@/utils/queryClient";
import { getFilteredPosts } from "@/features/listing/service";
import { listingResponse } from "@/features/listing/types";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getProfile } from "@/features/auth/actions";
import { cookies } from "next/headers";
import PageBanner from "@/components/shared/PageBanner";
import FilterSideBar from "@/features/listing/components/FilterSideBar";
import PostsList from "@/features/listing/components/PostsList";

function normalize(param: string | string[] | undefined): string | null {
  if (Array.isArray(param)) return param[0] ?? null;
  return typeof param === "string" ? param : null;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const queryClient = getQueryClient();
  const cookieStore = await cookies();

  const { data: categories } = await getCategories();
  const { user } = await getProfile();

  const filterParams = {
    sort: normalize((await searchParams).sort),
    search: normalize((await searchParams).search),
    price_from: normalize((await searchParams).price_from),
    price_to: normalize((await searchParams).price_to),
    condition: normalize((await searchParams).condition),
    category_id: normalize((await searchParams).category_id),
    user_id: user?.id ?? null,
    longitude: cookieStore.get("longitude")?.value ?? null,
    latitude: cookieStore.get("latitude")?.value ?? null,
    kilometers: cookieStore.get("kilometers")?.value ?? null,
    delivery_method: cookieStore.get("delivery_method")?.value ?? null,
  };

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", filterParams],
    queryFn: ({ pageParam = 1 }) =>
      getFilteredPosts({ page: pageParam, ...filterParams }),
    initialPageParam: 1,
    getNextPageParam: (
      lastPage: listingResponse,
      _allPages: listingResponse[],
      lastPageParam: number
    ) => {
      const posts = lastPage?.data ?? [];
      return posts.length < 22 ? undefined : lastPageParam + 1;
    },
  });

  return (
    <>
      <PageBanner links={[{ title: "Home", link: "/" }]} page="All Posts" />

      <div className="container py-4">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full lg:w-3/12 px-2 pb-2 pt-4">
            <FilterSideBar categories={categories} />
          </div>

          <div className="w-full lg:w-9/12 px-2 py-2">
            <HydrationBoundary state={dehydrate(queryClient)}>
              <PostsList
                userId={filterParams.user_id}
                longitude={filterParams.longitude ?? ""}
                latitude={filterParams.latitude ?? ""}
                kilometers={filterParams.kilometers ?? ""}
                delivery_method={filterParams.delivery_method ?? ""}
              />
            </HydrationBoundary>
          </div>
        </div>
      </div>
    </>
  );
}
