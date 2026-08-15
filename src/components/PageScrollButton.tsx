// Floating scroll buttons (mobile only) for the family tree page.
// On touch devices the tree intercepts finger swipes to pan/zoom, so the user
// cannot scroll the page normally. These buttons scroll the page up/down.
export default function PageScrollButton() {
  const scrollAmount = () => window.innerHeight * 0.8;

  return (
    // The mobile browser's bottom toolbar/safe-area can overlap buttons too
    // close to the screen edge, so keep the stack well above it.
    <div class="fixed right-4 z-50 flex flex-col gap-3 md:hidden bottom-[calc(env(safe-area-inset-bottom)+5rem)]">
      <button
        aria-label="Scroll up"
        onClick={() => window.scrollBy({ top: -scrollAmount(), behavior: "smooth" })}
        class="w-12 h-12 rounded-full border-2 border-dorado/60 bg-background/90 backdrop-blur-md flex items-center justify-center text-dorado hover:bg-dorado hover:text-background transition shadow-lg shadow-black/50 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 15l6-6l6 6" />
        </svg>
      </button>
      <button
        aria-label="Scroll down"
        onClick={() => window.scrollBy({ top: scrollAmount(), behavior: "smooth" })}
        class="w-12 h-12 rounded-full border-2 border-dorado/60 bg-background/90 backdrop-blur-md flex items-center justify-center text-dorado hover:bg-dorado hover:text-background transition shadow-lg shadow-black/50 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 9l6 6l6-6" />
        </svg>
      </button>
    </div>
  );
}
