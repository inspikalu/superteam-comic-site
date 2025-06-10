import Image from 'next/image';
interface Milestone {
  chapter: string;
  date: string;
  title: string;
  desc: string;
  visual: string;
}

interface MilestonePanelProps {
  milestone: Milestone;
  index: number;
}

export default function MilestonePanel({
  milestone,
  index,
}: MilestonePanelProps) {
  const getComicEffect = (index: number) => {
    const effects = ['ZOOM!', 'BAM!', 'KAPOW!'];
    return effects[index % 3];
  };

  const getEffectPosition = (index: number) => {
    if (index % 3 === 0) return 'absolute top-2 right-2 transform rotate-12';
    if (index % 3 === 1) return 'absolute bottom-2 right-2 transform -rotate-6';
    return 'absolute top-2 right-2 transform rotate-12';
  };

  return (
    <div className="comic-panel-milestone bg-white border-4 border-black overflow-hidden opacity-0">
      {/* Image placeholder area */}
      <div className="h-50 bg-gray-100 border-b-4 border-black flex items-center justify-center relative overflow-hidden">
        <Image
          src={`/panels/img_${index + 1}.png`}
          width={100}
          height={100}
          alt={`milestone.chapter`}
          className="w-full h-auto object-cover object-top"
        />
        {/* Chapter badge */}
        <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 font-bold text-xs border-2 border-black">
          {milestone.chapter}
        </div>
        {/* Comic effect */}
        <div
          className={`${getEffectPosition(index)} text-green-500 font-bold text-sm comic-effect`}
        >
          {getComicEffect(index)}
        </div>
      </div>

      {/* Content area */}
      <div className="p-4">
        <div className="text-xs font-bold text-black mb-1 uppercase tracking-wide">
          {milestone.date}
        </div>
        <h3 className="text-sm font-bold text-black mb-2 leading-tight">
          {milestone.title}
        </h3>
        <p className="text-xs text-black leading-tight mb-4">
          {milestone.desc}
        </p>
      </div>
    </div>
  );
}
