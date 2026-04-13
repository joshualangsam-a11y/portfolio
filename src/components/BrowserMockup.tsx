"use client";

export default function BrowserMockup({
  gradient,
  children,
  url,
}: {
  gradient: string;
  children?: React.ReactNode;
  url?: string;
}) {
  return (
    <div className="rounded-[9px] border border-border overflow-hidden bg-bg-elevated shadow-2xl shadow-black/30">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-[#0e0e0e]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        {url && (
          <div className="ml-4 flex-1 max-w-[300px] bg-[#1a1a1a] rounded-md px-3 py-1 text-[10px] text-text-muted/40 font-mono truncate">
            {url}
          </div>
        )}
      </div>

      {/* Content area */}
      <div
        className="aspect-[16/10] relative overflow-hidden"
        style={{ background: gradient }}
      >
        {children}
      </div>
    </div>
  );
}
