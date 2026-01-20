"use client";

export default function ChatTranscript({ messages }: { messages: string }) {
  if (!messages) return <p className="text-muted-foreground">No summary available</p>;

  // 🧩 Split message text into structured messages
  const messageList = messages.split(/(AI:|User:)/).filter(Boolean);

  const formattedMessages = [];
  for (let i = 0; i < messageList.length; i += 2) {
    const sender = messageList[i].trim().replace(":", "");
    const text = messageList[i + 1]?.trim();
    if (sender && text) formattedMessages.push({ sender, text });
  }

  return (
    <div className="flex flex-col gap-3 p-3 bg-background rounded-md overflow-y-auto max-h-[500px] border">
      {formattedMessages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${msg.sender === "AI" ? "justify-start" : "justify-end"}`}
        >
          <div
            className={`max-w-[75%] p-3 rounded-xl shadow-sm text-sm whitespace-pre-wrap ${
              msg.sender === "AI"
                ? "bg-muted text-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            <p>{msg.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
