"use server";

import { cookies } from "next/headers";

export async function saveLocationFilters(data: {
  latitude?: string;
  longitude?: string;
  zip_code?: string;
  kilometers?: string;
  address?: string;
  delivery_method?: string;
}) {
  const store = await cookies();

  if (data.latitude) store.set("latitude", data.latitude, { path: "/" });
  if (data.longitude) store.set("longitude", data.longitude, { path: "/" });
  if (data.address) store.set("address", data.address, { path: "/" });
  if (data.kilometers)
    store.set("kilometers", String(data.kilometers), { path: "/" });
  if (data.zip_code)
    store.set("zip_code", String(data.zip_code), { path: "/" });
  if (data.delivery_method)
    store.set("delivery_method", data.delivery_method, { path: "/" });

  return { success: true };
}
