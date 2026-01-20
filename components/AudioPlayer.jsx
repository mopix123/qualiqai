// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import WaveSurfer from "wavesurfer.js";
// import { Button } from "./ui/button";
// import { ArrowDownToLine } from 'lucide-react';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// export default function AudioPlayer({ audioUrl }) {
//   const waveformRef = useRef(null);
//   const wavesurfer = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [duration, setDuration] = useState("00:00");
//   const [currentTime, setCurrentTime] = useState("00:00");
//   const [playbackRate, setPlaybackRate] = useState(1.0);

//   useEffect(() => {
//     if (!waveformRef.current) return;

//     wavesurfer.current = WaveSurfer.create({
//       container: waveformRef.current,
//       waveColor: "#00ADB5",       // bottom waveform (cyan)
//       progressColor: "#F08A5D",   // top waveform (orange)
//       cursorColor: "#ffffff",
//       height: 80,
//       barWidth: 2,
//       responsive: true,
//       normalize: true,
//       backend: "mediaelement",
//     });

//     wavesurfer.current.load(audioUrl);

//     wavesurfer.current.on("ready", () => {
//       const dur = wavesurfer.current?.getDuration() || 0;
//       setDuration(formatTime(dur));
//     });

//     wavesurfer.current.on("audioprocess", () => {
//       const cur = wavesurfer.current?.getCurrentTime() || 0;
//       setCurrentTime(formatTime(cur));
//     });

//     return () => {
//       wavesurfer.current?.destroy();
//     };
//   }, [audioUrl]);

//   const togglePlay = () => {
//     if (!wavesurfer.current) return;
//     wavesurfer.current.playPause();
//     setIsPlaying(wavesurfer.current.isPlaying());
//   };

//   const changeSpeed = (e) => {
//     const rate = parseFloat(e.target.value);
//     setPlaybackRate(rate);
//     wavesurfer.current?.setPlaybackRate(rate);
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
//   };

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = audioUrl;
//     link.download = "recording.mp3";
//     link.click();
//   };

//   return (
//     <div className="bg-[#0f0f0f] rounded-xl p-4 text-white w-full mx-auto shadow-lg">
//       <h3 className="text-sm font-medium mb-2">Recording</h3>

//       <div ref={waveformRef} className="w-full" />

//       <div className="flex justify-between items-center mt-3 text-xs text-gray-300">
//         <div className="flex items-center gap-2">
//           <Button
//             onClick={togglePlay}
//             variant="outline" size="sm"
//           >
//             {isPlaying ? "Pause" : "Play"}
//           </Button>

//           <div className="flex items-center gap-2">
//             <span>{currentTime}</span>
//             <span>/</span>
//             <span>{duration}</span>
//           </div>
//         </div>

//         <div className="flex items-center gap-2">
//           <Select value={playbackRate} onValueChange={changeSpeed}>
//       <SelectTrigger className="w-[80px]">
//         <SelectValue placeholder={`${playbackRate}x`} />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value="0.5">0.5x</SelectItem>
//         <SelectItem value="1.0">1.0x</SelectItem>
//         <SelectItem value="1.5">1.5x</SelectItem>
//         <SelectItem value="2.0">2.0x</SelectItem>
//       </SelectContent>
//     </Select>

//           <Button
//             onClick={handleDownload}
//             variant="outline" size="sm"
//           >
//             <ArrowDownToLine />Audio
//             </Button>
//         </div>
//       </div>
//     </div>
//   );
// }










"use client";

import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AudioPlayer({ audioUrl }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState("00:00");
  const [currentTime, setCurrentTime] = useState("00:00");
  const [playbackRate, setPlaybackRate] = useState("1.0");

  useEffect(() => {
    if (!waveformRef.current) return;

    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#ff2056", // waveform colorff2056
      progressColor: "#741b33", // progress color
      cursorColor: "#ffffff",
      height: 80,
      barWidth: 2,
      responsive: true,
      normalize: true,
      backend: "mediaelement",
    });

    wavesurfer.current.load(audioUrl);

    wavesurfer.current.on("ready", () => {
      const dur = wavesurfer.current?.getDuration() || 0;
      setDuration(formatTime(dur));
    });

    wavesurfer.current.on("audioprocess", () => {
      const cur = wavesurfer.current?.getCurrentTime() || 0;
      setCurrentTime(formatTime(cur));
    });

    return () => {
      wavesurfer.current?.destroy();
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (!wavesurfer.current) return;
    wavesurfer.current.playPause();
    setIsPlaying(wavesurfer.current.isPlaying());
  };

  const changeSpeed = (value) => {
    const rate = parseFloat(value);
    setPlaybackRate(value);
    wavesurfer.current?.setPlaybackRate(rate);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = audioUrl;
    link.download = "recording.mp3";
    link.click();
  };

  return (
    <div className="bg-[#0f0f0f] rounded-xl p-4 text-white w-full mx-auto shadow-lg">
      <h3 className="text-sm font-medium mb-2">Recording</h3>

      <div ref={waveformRef} className="w-full" />

      <div className="flex justify-between items-center mt-3 text-xs text-gray-300">
        <div className="flex items-center gap-2">
          <Button onClick={togglePlay} variant="outline" size="sm">
            {isPlaying ? "Pause" : "Play"}
          </Button>

          <div className="flex items-center gap-2">
            <span>{currentTime}</span>
            <span>/</span>
            <span>{duration}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Select value={playbackRate} onValueChange={changeSpeed}>
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder={`${playbackRate}x`} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0.5">0.5x</SelectItem>
              <SelectItem value="1.0">1.0x</SelectItem>
              <SelectItem value="1.5">1.5x</SelectItem>
              <SelectItem value="2.0">2.0x</SelectItem>
            </SelectContent>
          </Select>

          <Button onClick={handleDownload} variant="outline" size="sm">
            <ArrowDownToLine className="w-4 h-4 mr-1" />
            Audio
          </Button>
        </div>
      </div>
    </div>
  );
}
