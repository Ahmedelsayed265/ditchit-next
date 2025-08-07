import { getCategories } from "@/services/getCategories";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const { data: categories } = await getCategories();

  return (
    <div className="container py-5">
      <div className="flex flex-wrap -mx-2">
        {categories.map((category) => (
          <div key={category.id} className="w-full md:w-1/2 lg:w-1/4 p-2">
            <Link
              href={`all-posts?category_id=${category.id}`}
              className="group relative block p-[20px] border border-[var(--lightBorderColor)] bg-white transition-all duration-300 ease-in-out rounded-[16px] hover:border-[var(--darkColor)]"
            >
              <span
                className="pointer-events-none absolute top-[8px] left-[8px] h-full w-full rounded-[16px] border border-[var(--darkColor)] opacity-0 shadow-[0px_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible -z-10"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between">
                <h5 className="text-[14px] font-bold">{category.title}</h5>
                <Image
                  src={category.image}
                  alt={category.title}
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
