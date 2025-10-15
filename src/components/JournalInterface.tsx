import { useState, useEffect } from "react";

const JOURNAL_STORAGE_KEY = "daily_bloom_journal";

export default function JournalInterface() {
  const [journalText, setJournalText] = useState("");
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  //load journal entry when the component first renders
  useEffect(() => {
    const saved = localStorage.getItem(JOURNAL_STORAGE_KEY);
    if (saved) {
      setJournalText(saved);
    }
  }, []);

  //Auto saave
  useEffect(() => {
    if (journalText === "" && !localStorage.getItem(JOURNAL_STORAGE_KEY)) {
      return;
    }
    const timer = setTimeout(() => {
      localStorage.setItem(JOURNAL_STORAGE_KEY, journalText);
      setLastSaved(new Date());
    }, 500);
    return () => clearTimeout(timer);
  }, [journalText]);

  //Format the last Time Saved
  const formatSavedTime = () => {
    if (!lastSaved) return "";
    const now = new Date();
    const diff = now.getTime() - lastSaved.getTime();

    if (diff < 5000) return "Saved just now";
    if (diff > 6000) return "Saved moments ago";

    return `Saved at ${lastSaved.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };
  return (
    <main className="flex flex-col h-[calc(100vh-73px)] bg-gray-50">
      {/*Container for journal */}
      <div className="flex 1 max-w-4xl w-full mx-auto px-6 py-8">
        <div className="text-sm text-gray-600">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        {/*Autosave indicator*/}
        {lastSaved && (
          <div className="text-xs text-gray-500 italic p-2 text-left ">
            {formatSavedTime()}
          </div>
        )}
      </div>

      {/*Journal Text */}
      <textarea
        value={journalText}
        onChange={(e) => setJournalText(e.target.value)}
        placeholder="What's on your mind today?"
        className="w-full h-full resize-none border border-gray-200 rounded-lg p-4
      focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent bg-white text-gray-800 placeholder-gray-400"
      />
    </main>
  );
}
