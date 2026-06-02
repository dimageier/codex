import { HeroScene } from "./components/HeroScene";
import { MythicArc } from "./components/MythicArc";
import { TrackExplorer } from "./components/TrackExplorer";
import { VisualGallery } from "./components/VisualGallery";
import { Footer } from "./components/Footer";
import { useActiveTrack } from "./hooks/useActiveTrack";

function App() {
  const { activeId, activeTrack, setActiveId } = useActiveTrack(1);

  return (
    <div className="min-h-screen bg-[#050508]">
      <HeroScene />
      <MythicArc activeId={activeId} onSelect={setActiveId} />
      <TrackExplorer
        activeId={activeId}
        activeTrack={activeTrack}
        onSelect={setActiveId}
      />
      <VisualGallery />
      <Footer />
    </div>
  );
}

export default App;