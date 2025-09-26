"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";

interface ContentItem {
  _id: string;
  _type: "chapter" | "ebookPage";
  title: string;
  content?: string;
}

interface Ebook {
  title: string;
  slug: string;
  coverImageUrl: string;
  content: ContentItem[];
}

async function getEbook(slug: string) {
  const query = `*[_type == "ebook" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    "coverImageUrl": coverImage.asset->url,
    "content": content[]->{
      _id,
      _type,
      title,
      content
    }
  }`;
  const ebook = await client.fetch(query, { slug });
  return ebook;
}

export default function EbookPage() {
  const [ebook, setEbook] = useState<Ebook | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    async function fetchData() {
      const ebookData = await getEbook(slug);
      setEbook(ebookData);
    }
    if (slug) {
      fetchData();
    }
  }, [slug]);

  useEffect(() => {
    const page = searchParams.get("page");
    const pageNumber = page ? parseInt(page, 10) - 1 : 0;
    if (!isNaN(pageNumber) && pageNumber >= 0) {
      setCurrentPage(pageNumber);
    } else {
      setCurrentPage(0);
    }
  }, [searchParams]);

  useEffect(() => {
    if (ebook) {
      router.push(`?page=${currentPage + 1}`, { scroll: false });
    }
    // Close TOC on page change on mobile
    setIsTocOpen(false);
  }, [currentPage, ebook, router]);

  if (!ebook) {
    return (
      <div className="flex items-center justify-center h-screen">
        eBook not found
      </div>
    );
  }

  const handleNextPage = () => {
    if (currentPage < ebook.content.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleTocItemClick = (index: number) => {
    setCurrentPage(index);
  };

  const currentContent = ebook.content[currentPage];

  const TableOfContents = () => (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {ebook.content?.map((item, index: number) => {
          const isChapter = item._type === "chapter";
          return (
            <li key={item._id}>
              <button
                onClick={() => handleTocItemClick(index)}
                className={`text-left w-full p-2 rounded transition-colors ${
                  currentPage === index
                    ? "bg-blue-100 text-blue-700 font-bold"
                    : "text-gray-800 hover:bg-gray-100"
                } ${isChapter ? "font-bold mt-2" : ""}`}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsTocOpen(!isTocOpen)}
          className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded"
        >
          {isTocOpen ? "Close" : "Table of Contents"}
        </button>
        {isTocOpen && <TableOfContents />}
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="hidden md:block md:w-1/3">
          {ebook.coverImageUrl && (
            <Image
              src={ebook.coverImageUrl}
              alt={ebook.title}
              width={400}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              priority
            />
          )}
          <h1 className="text-3xl font-bold mt-4">{ebook.title}</h1>
          <TableOfContents />
        </div>

        <div className="md:w-2/3">
          {/* Mobile-only cover image on first page */}
          {currentPage === 0 && (
            <div className="md:hidden mb-4">
              {ebook.coverImageUrl && (
                <Image
                  src={ebook.coverImageUrl}
                  alt={ebook.title}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                  priority
                />
              )}
            </div>
          )}

          <div className="mb-12">
            {currentContent._type === "chapter" ? (
              <div className="flex items-center justify-center min-h-[calc(100vh-20rem)]">
                <h2 className="text-4xl font-bold text-gray-800 text-center">
                  {currentContent.title}
                </h2>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4">
                  {currentContent.title}
                </h2>
                <div className="prose lg:prose-xl max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {currentContent.content}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === ebook.content.length - 1}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
