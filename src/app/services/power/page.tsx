import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";
import type { Metadata } from "next";

const service = getService("power")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.blurb,
};

export default function Page() {
  return <ServicePage service={service} />;
}
