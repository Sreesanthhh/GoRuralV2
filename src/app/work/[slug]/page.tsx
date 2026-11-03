import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CategoryDetail } from "@/components/CategoryDetail";
import { caseStudies, workCategories } from "@/data/content";

export function generateStaticParams() {
  return workCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = workCategories.find((c) => c.slug === slug);
  if (!category) return {};

  const count = caseStudies.filter((c) => c.category === slug).length;
  const description = category.description
    ? category.description.slice(0, 180)
    : count > 0
      ? `${category.short} ${count} past ${category.title} campaigns from the Go Rural India archive across Telangana and Andhra Pradesh.`
      : `${category.short} Go Rural India, Hyderabad.`;

  return {
    title: category.title,
    description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      type: "article",
      url: `/work/${slug}`,
      title: `${category.title} | Go Rural India`,
      description,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = workCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <>
      <Nav alwaysVisible />
      <main id="main" className="flex-1 pt-16 md:pt-20">
        <CategoryDetail category={category} />
      </main>
      <Footer />
    </>
  );
}
