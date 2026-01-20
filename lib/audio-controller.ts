let currentAudio: HTMLAudioElement | null = null

export function playAudio(audio: HTMLAudioElement) {
  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
  }
  currentAudio = audio
  audio.play()
}

export function stopAudio(audio: HTMLAudioElement) {
  audio.pause()
  audio.currentTime = 0
  if (currentAudio === audio) {
    currentAudio = null
  }
}