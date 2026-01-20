export type Voice = {
  id: string
  name: string
  gender: "Male" | "Female"
  accent: string
  provider: string
  audioUrl: string
}

export const voices: Voice[] = [
  {
    id: "1",
    name: "Payne",
    gender: "Male",
    accent: "American",
    provider: "11labs",
    audioUrl: `https://storage.googleapis.com/eleven-public-prod/database/user/gDNGWcD7UCYSezIGdtxDH3smwq83/voices/ZCtBm65V5P2WRgHF7fKI/1O0oS7zjbnuHDrIAxaV5.mp3`,
  },
  {
    id: "2",
    name: "Sunny –",
    gender: "Female",
    accent: "American",
    provider: "11labs",
    audioUrl: `https://storage.googleapis.com/eleven-public-prod/database/user/gcxqYt4XDUdmYrXT1Sg9FIBK5T62/voices/k9KXsQFJqzAoomTCOrJB/2rUQx6z8r8ww4GVfoipz.mp3`,
  },
  {
    id: "3",
    name: "Sunny ",
    gender: "Female",
    accent: "American",
    provider: "11labs",
    audioUrl: `https://storage.googleapis.com/eleven-public-prod/database/user/PFp53r1JleciWa4zEB8MJHl6hcn2/voices/TcrlBgVmqvmPFJi2o2AO/YGVy5Hsq6X4tcsGBzQ67.mp3`,
  },
  {
    id: "4",
    name: "Sunny ",
    gender: "Female",
    accent: "American",
    provider: "11labs",
    audioUrl: `https://storage.googleapis.com/eleven-public-prod/database/user/PFp53r1JleciWa4zEB8MJHl6hcn2/voices/TcrlBgVmqvmPFJi2o2AO/YGVy5Hsq6X4tcsGBzQ67.mp3`,
  },
  {
    id: "5",
    name: "Sunny ",
    gender: "Female",
    accent: "American",
    provider: "11labs",
    audioUrl: `https://storage.googleapis.com/eleven-public-prod/database/user/PFp53r1JleciWa4zEB8MJHl6hcn2/voices/TcrlBgVmqvmPFJi2o2AO/YGVy5Hsq6X4tcsGBzQ67.mp3`,
  },
]