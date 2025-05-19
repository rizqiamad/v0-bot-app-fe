export function HeroIllustration() {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-start gap-4">
        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-blue-600 text-xs">AI</span>
        </div>
        <div className="bg-blue-100 rounded-2xl rounded-tl-none p-4 text-sm max-w-[80%]">
          Hello! I'm your AI assistant. How can I help you today?
        </div>
      </div>

      <div className="flex items-start gap-4 self-end">
        <div className="bg-primary/10 rounded-2xl rounded-tr-none p-4 text-sm max-w-[80%]">
          Can you help me find information about renewable energy sources?
        </div>
        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary text-xs">U</span>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-blue-600 text-xs">AI</span>
        </div>
        <div className="bg-blue-100 rounded-2xl rounded-tl-none p-4 text-sm max-w-[80%]">
          Of course! Renewable energy sources include solar, wind, hydroelectric, geothermal, and biomass. Which one
          would you like to learn more about?
        </div>
      </div>

      <div className="flex items-start gap-4 self-end">
        <div className="bg-primary/10 rounded-2xl rounded-tr-none p-4 text-sm max-w-[80%]">
          Tell me more about solar energy, please.
        </div>
        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary text-xs">U</span>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-blue-600 text-xs">AI</span>
        </div>
        <div className="bg-blue-100 rounded-2xl rounded-tl-none p-4 text-sm max-w-[80%] animate-pulse">
          <div className="flex items-center gap-1">
            <div
              className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
