"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  search: string;
  setSearch: (v: string) => void;
  gender: string;
  setGender: (v: string) => void;
  accent: string;
  setAccent: (v: string) => void;
};

export function VoiceToolbar({
  search,
  setSearch,
  gender,
  setGender,
  accent,
  setAccent,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <Input
        placeholder="Search voices..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-64"
      />

      <Select value={gender} onValueChange={setGender}>
        <SelectTrigger className="w-36">
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="Male">Male</SelectItem>
          <SelectItem value="Female">Female</SelectItem>
        </SelectContent>
      </Select>

      <Select value={accent} onValueChange={setAccent}>
        <SelectTrigger className="w-36">
          <SelectValue placeholder="Accent" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="American">American</SelectItem>
          <SelectItem value="Indian">Indian</SelectItem>
          <SelectItem value="Canadian">Canadian</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
