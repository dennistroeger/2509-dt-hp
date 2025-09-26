"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { List, LayoutGrid } from "lucide-react";

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
  coverTagline?: string;
  coverBenefit1?: string;
  coverBenefit2?: string;
  coverBackgroundColor?: { hex: string };
}

async function getEbook(slug: string) {
  const query = `*[_type == "ebook" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    "coverImageUrl": coverImage.asset->url,
    coverTagline,
    coverBenefit1,
    coverBenefit2,
    coverBackgroundColor,
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
  const [isOverview, setIsOverview] = useState(true);
  const [viewType, setViewType] = useState("grid");
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
    if (page) {
      const pageNumber = parseInt(page, 10) - 1;
      if (!isNaN(pageNumber) && pageNumber >= 0) {
        setCurrentPage(pageNumber);
        setIsOverview(false); // If there is a page in URL, go to reader
      } else {
        // Invalid page, go to overview
        router.push(`/library/${slug}`);
        setIsOverview(true);
      }
    } else {
      setIsOverview(true); // No page in URL, show overview
    }
  }, [searchParams, slug, router]);

  useEffect(() => {
    if (ebook && !isOverview) {
      const newUrl = `/library/${slug}?page=${currentPage + 1}`;
      // Prevent pushing the same URL again
      if (`${window.location.pathname}?${window.location.search}` !== newUrl) {
        router.push(newUrl, { scroll: false });
      }
    }
    // Close TOC on page change on mobile
    setIsTocOpen(false);
  }, [currentPage, ebook, router, isOverview, slug]);

  if (!ebook) {
    return (
      <div className="flex items-center justify-center h-screen">
        eBook not found
      </div>
    );
  }

  const handleTocItemClick = (index: number) => {
    setCurrentPage(index);
    setIsOverview(false);
  };

  const EbookReader = () => {
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
                      ? "bg-blue-500 text-white font-bold"
                      : "text-gray-600 hover:bg-gray-100"
                  } ${isChapter ? "font-bold mt-2 text-lg" : "pl-4"}`}
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
      <div className="bg-white text-black min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => {
              setIsOverview(true);
              router.push(`/library/${slug}`);
            }}
            className="text-blue-500 hover:underline mb-4"
          >
            &larr; Back to Overview
          </button>
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
            <div className="hidden md:block md:w-1/3 lg:w-1/4">
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
              <h1 className="text-3xl font-bold mt-4 mb-2">{ebook.title}</h1>
              <p className="text-gray-600 mb-4">
                Your friendly guide to the content.
              </p>
              <TableOfContents />
            </div>

            <div className="md:w-2/3 lg:w-3/4">
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

              <div className="mb-12 p-6 md:p-8 bg-gray-50 rounded-lg shadow-inner min-h-[calc(100vh-20rem)]">
                {currentContent._type === "chapter" ? (
                  <div className="flex items-center justify-center h-full min-h-[calc(100vh-24rem)]">
                    <h2 className="text-5xl font-extrabold text-gray-800 text-center leading-tight">
                      {currentContent.title}
                    </h2>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-4 mb-6">
                      {currentContent.title}
                    </h2>
                    <div className="prose prose-lg lg:prose-xl max-w-none">
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
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === ebook.content.length - 1}
                  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const EbookOverview = () => {
    const coverBgColor = ebook.coverBackgroundColor?.hex || "#1E40AF"; // Fallback to a blue color
    return (
      <div className="flex flex-col md:flex-row min-h-screen bg-white text-black">
        <div
          className="w-full md:w-1/3 text-white p-8 flex flex-col justify-between"
          style={{ backgroundColor: coverBgColor }}
        >
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold uppercase tracking-wider">
              {ebook.title}
            </h1>
            <p className="mt-4 text-lg lg:text-xl">{ebook.coverTagline}</p>
          </div>
          {ebook.coverImageUrl && (
            <div className="my-8 transform transition-transform duration-500 hover:scale-105">
              <Image
                src={ebook.coverImageUrl}
                alt={ebook.title}
                width={400}
                height={600}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          )}
          <div className="space-y-4 text-sm font-semibold">
            {ebook.coverBenefit1 && <p>{ebook.coverBenefit1}</p>}
            {ebook.coverBenefit2 && <p>{ebook.coverBenefit2}</p>}
          </div>
        </div>
        <div className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500 font-medium">
              ▶ {ebook.title}
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4">{ebook.title}</h2>
          <p className="text-lg text-gray-600 mt-2">{ebook.coverTagline}</p>
          <div className="flex items-center gap-2 mt-4 border-b pb-4">
            <button
              onClick={() => setViewType("list")}
              className={`p-2 rounded-md ${
                viewType === "list" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
              aria-label="List view"
            >
              <List
                className={`w-6 h-6 ${
                  viewType === "list" ? "text-black" : "text-gray-500"
                }`}
              />
            </button>
            <button
              onClick={() => setViewType("grid")}
              className={`p-2 rounded-md ${
                viewType === "grid" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
              aria-label="Grid view"
            >
              <LayoutGrid
                className={`w-6 h-6 ${
                  viewType === "grid" ? "text-black" : "text-gray-500"
                }`}
              />
            </button>
          </div>
          <div
            className={`mt-8 ${
              viewType === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
                : "space-y-4"
            }`}
          >
            {ebook.content.map((item, index) => {
              const wordCount = item.content
                ? item.content.split(/\s+/).length
                : 0;
              const isChapter = item._type === "chapter";
              return (
                <div
                  key={item._id}
                  onClick={() => handleTocItemClick(index)}
                  className="border rounded-lg p-6 cursor-pointer hover:shadow-xl hover:border-blue-500 transition-all duration-300 bg-gray-50 transform hover:-translate-y-1"
                >
                  <h3
                    className={`font-bold ${isChapter ? "text-xl" : "text-lg"}`}
                  >
                    {item.title}
                  </h3>
                  {!isChapter && (
                    <p className="text-sm text-gray-500 mt-2">
                      {wordCount} words
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return isOverview ? <EbookOverview /> : <EbookReader />;
}
