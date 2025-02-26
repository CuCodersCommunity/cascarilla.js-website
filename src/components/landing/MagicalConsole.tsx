import { useState } from "react";

interface LogEntry {
  id: number;
  type: "info" | "spell" | "result";
  message: string;
  timestamp: string;
}

export default function MagicalConsole() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [counter, setCounter] = useState(0);

  const addLog = (message: string, type: LogEntry["type"] = "info") => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev, { id: counter, message, type, timestamp }]);
    setCounter((prev) => prev + 1);
  };

  // Magical functions
  const castRandomSpell = () => {
    const spells = [
      "Lumos Maxima",
      "Wingardium Leviosa",
      "Expecto Patronum",
      "Alohomora",
      "Accio Data",
    ];
    const randomSpell = spells[Math.floor(Math.random() * spells.length)];
    addLog(`🪄 Casting spell: ${randomSpell}`, "spell");

    // Simulate spell effect
    setTimeout(() => {
      const results = [
        "✨ The code illuminates with magical energy!",
        "🪶 Your data begins to float gracefully",
        "🦌 A silvery stream of functions appears",
        "🔓 The hidden features unlock themselves",
        "📦 Data comes flying your way!",
      ];
      const resultIndex = spells.indexOf(randomSpell);
      addLog(results[resultIndex], "result");
    }, 1000);
  };

  const transmutateArray = () => {
    console.log('transmutate')
    const originalArray = [1, 2, 3, 4, 5];
    addLog(`🔮 Beginning array transmutation...`, "spell");
    addLog(`Original array: [${originalArray.join(", ")}]`, "info");

    setTimeout(() => {
      const transmutated = originalArray.map((num) => `✨${num * 2}✨`);
      addLog(`Transmutated array: [${transmutated.join(", ")}]`, "result");
    }, 800);
  };

  const summonRandomNumber = () => {
    addLog(`📜 Consulting the ancient scrolls...`, "spell");

    setTimeout(() => {
      const number = Math.floor(Math.random() * 100) + 1;
      addLog(`The spirits have chosen: ${number}`, "result");
    }, 600);
  };

  return (
    <div className="rounded-xl border border-purple-500/20 bg-purple-500/[0.02] p-6 z-10">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl text-purple-200">🪄</span>
          <h3 className="text-lg font-semibold text-purple-200">
            Magical Console
          </h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={castRandomSpell}
            className="rounded-full bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300 transition-all hover:bg-purple-500/20 hover:text-purple-200"
          >
            Cast Random Spell
          </button>
          <button
            onClick={transmutateArray}
            className="rounded-full bg-pink-500/10 px-4 py-1.5 text-sm text-pink-300 transition-all hover:bg-pink-500/20 hover:text-pink-200"
          >
            Transmutate Array
          </button>
          <button
            onClick={summonRandomNumber}
            className="rounded-full bg-red-500/10 px-4 py-1.5 text-sm text-red-300 transition-all hover:bg-red-500/20 hover:text-red-200"
          >
            Summon Number
          </button>
        </div>
      </div>

      <div className="h-[300px] rounded-lg border border-purple-500/10 bg-black/50 p-4 font-mono">
        {logs.length === 0 ? (
          <div className="flex h-full items-center justify-center text-sm text-purple-300/50">
            Cast a spell to see the magic happen...
          </div>
        ) : (
          <div className="space-y-2">
            {logs.map((log, index) => (
              <div
                key={`${log.id}-${index}`}
                className={`text-sm ${
                  log.type === "spell"
                    ? "text-purple-300"
                    : log.type === "result"
                    ? "text-green-300"
                    : "text-gray-400"
                }`}
              >
                <span className="mr-2 text-gray-500">{log.timestamp}</span>
                <span className="font-medium">{log.message}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-purple-300/50">
        <span>🔮</span>
        <span>
          Tip: Open your browser console (F12) to see the full magical output!
        </span>
      </div>
    </div>
  );
}
