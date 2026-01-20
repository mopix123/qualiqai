"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { Voice } from "@/lib/voices";
import { playAudio, stopAudio } from "@/lib/audio-controller";

export function VoiceCard({ voice }: { voice: Voice }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const onEnd = () => setPlaying(false);

    audio.addEventListener("ended", onEnd);
    return () => audio.removeEventListener("ended", onEnd);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      stopAudio(audioRef.current);
      setPlaying(false);
    } else {
      playAudio(audioRef.current);
      setPlaying(true);
    }
  };

  return (
    <Card className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3">
      <audio ref={audioRef} src={voice.audioUrl} preload="none" />

      {/* LEFT SIDE: Avatar + Text */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 rounded-lg bg-rose-600 flex items-center justify-center text-sm font-semibold text-white shrink-0">
            {voice.gender === "Male" ? "M" : "F"}
          </div>

          <div className="flex flex-col leading-tight truncate">
            <span className="text-sm font-medium text-white truncate">
              {voice.name}
            </span>
            <span className="text-xs text-zinc-400 truncate">
              {voice.gender} · {voice.accent}
            </span>
          </div>
        </div>
        <Button
          size="icon"
          variant="ghost"
          onClick={togglePlay}
          className="h-9 w-9 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white shrink-0"
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </Button>
      </div>
    </Card>
  );
}
