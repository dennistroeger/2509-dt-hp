import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 60; // Revalidate every 60 seconds

async function getEbooks() {
  const query = `*[_type == "ebook"]{
    title,
    "slug": slug.current,
    "coverImageUrl": coverImage.asset->url
  }`;
  const ebooks = await client.fetch(query);
  return ebooks;
}

export default async function LibraryPage() {
  const ebooks = await getEbooks();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">eBook Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ebooks.map((ebook: any) => (
          <Link href={`/library/${ebook.slug}`} key={ebook.slug}>
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {ebook.coverImageUrl && (
                <Image
                  src={ebook.coverImageUrl}
                  alt={ebook.title}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{ebook.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
