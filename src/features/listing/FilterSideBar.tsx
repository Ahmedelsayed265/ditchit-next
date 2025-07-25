import { Accordion } from "@/components/ui/accordion";
import { Category } from "@/types/category";
import Categoryfilter from "./Categoryfilter";
import PriceFilter from "./PriceFilter";
import SortBy from './SortBy';

export default function FilterSideBar({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="w-full rounded-xl border border-[var(--lightBorderColor)]">
      <Accordion
        type="single"
        collapsible
        defaultValue="item-2"
        className="w-full"
      >
        <SortBy />
        <Categoryfilter categories={categories} />
        <PriceFilter />
      </Accordion>
    </div>
  );
}
