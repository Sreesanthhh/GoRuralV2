import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CategoryDetail } from "@/components/CategoryDetail";
import { workCategories } from "@/data/content";

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
  return {
    title: `${category.title} | Go Rural India`,
    description: category.short,
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
      <main className="flex-1 pt-16 md:pt-20">
        <CategoryDetail category={category} />
      </main>
      <Footer />
    </>
  );
}
