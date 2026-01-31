// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { tutorialVideos } from "@/lib/tutorial-videos";
// import { Play } from "lucide-react";

// export default function VideoTutorials() {
//   const [open, setOpen] = useState(false);
//   const [activeVideo, setActiveVideo] = useState<string | null>(null);

//   return (
//     <div className="px-6 py-10">
//       <h2 className="text-2xl font-semibold text-white mb-6">
//         Video Tutorials
//       </h2>

//       {/* Video Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {tutorialVideos.map((video) => (
//           <button
//             key={video.id}
//             onClick={() => {
//               setActiveVideo(video.youtubeId);
//               setOpen(true);
//             }}
//             className="group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-[#ff2056] transition"
//           >
//             {/* Thumbnail */}
//             <Image
//               src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
//               alt={video.title}
//               width={400}
//               height={225}
//               className="object-cover w-full h-[180px]"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
//               <div className="h-12 w-12 rounded-full bg-[#ff2056] flex items-center justify-center">
//                 <Play className="text-white ml-1" />
//               </div>
//             </div>

//             {/* Meta */}
//             <div className="p-3 text-left">
//               <p className="text-sm font-medium text-white line-clamp-2">
//                 {video.title}
//               </p>
//               <span className="text-xs text-zinc-400">
//                 {video.duration}
//               </span>
//             </div>
//           </button>
//         ))}
//       </div>

//       {/* Video Dialog */}
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="max-w-4xl p-0 bg-black border-zinc-800">
//           <DialogHeader className="px-4 pt-4">
//             <DialogTitle className="text-white">
//               Video Tutorial
//             </DialogTitle>
//           </DialogHeader>

//           {/* YouTube iframe */}
//           {activeVideo && (
//             <div className="aspect-video w-full">
//               <iframe
//                 src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
//                 className="w-full h-full rounded-b-lg"
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//               />
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play } from "lucide-react";
import { tutorialVideos } from "@/lib/tutorial-videos";

export default function VideoTutorials() {
  function openVideo(video: (typeof tutorialVideos)[number]) {
    const url = `https://www.youtube.com/watch?v=${video.youtubeId}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {tutorialVideos.map((video) => (
        <div key={video.id} className="border-2 p-2 rounded-md">
          {/* Thumbnail */}
          <AspectRatio
            ratio={16 / 9}
            className="bg-muted rounded-lg cursor-pointer"
            onClick={() => openVideo(video)}
          >
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover transition group-hover:scale-105 rounded-md"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-rose-600 rounded-full p-2">
                <Play className="h-6 w-6 text-white opacity-80 group-hover:scale-110 transition stroke-3" />
              </div>
            </div>
          </AspectRatio>

          {/* Title */}
          <div className="p-1 pt-5">
            <h3 className="text-md font-medium ">{video.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
