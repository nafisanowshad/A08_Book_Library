'use client';

import { Input } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="w-full mb-6 p-[2px] rounded-2xl bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-rose-500/30 focus-within:from-pink-500 focus-within:via-purple-500 focus-within:to-rose-500 transition-all duration-300 shadow-sm focus-within:shadow-md focus-within:shadow-pink-500/10">
      <Input
        type="text"
        placeholder="Search books by title..."
        defaultValue={searchParams.get('search')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full bg-slate-50 border-none rounded-[14px] text-slate-800 placeholder:text-slate-400 focus:outline-none "
      />
    </div>
  );
};

export default SearchInput;