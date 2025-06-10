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
    <div className="comic-panel-milestone bg-white border-4 border-black overflow-hidden transform-gpu h-[85vh] w-[85vw] max-w-[800px] mx-auto flex flex-col snap-center my-2">
      {/* Image area - takes up 70% of the height */}
      <div className="h-[70%] bg-gray-100 border-b-4 border-black flex items-center justify-center relative overflow-hidden">
        <Image
          src={`/panels/img_${index + 1}.png`}
          width={100}
          height={100}
          alt={`milestone.chapter`}
          className="w-full h-full object-cover object-center"
          priority={index === 0}
        />
        {/* Chapter badge */}
        <div className="absolute top-4 left-4 bg-black text-white px-3 py-2 font-bold text-sm border-2 border-black z-10">
          {milestone.chapter}
        </div>
        {/* Comic effect */}
        <div
          className={`${getEffectPosition(index)} text-green-500 font-bold text-xl comic-effect z-10`}
        >
          {getComicEffect(index)}
        </div>
      </div>

      {/* Content area - takes up remaining height */}
      <div className="flex-1 p-6 flex flex-col justify-center bg-white">
        <div className="text-sm font-bold text-black mb-2 uppercase tracking-wide">
          {milestone.date}
        </div>
        <h3 className="text-xl font-bold text-black mb-3 leading-tight">
          {milestone.title}
        </h3>
        <p className="text-base text-black leading-relaxed">
          {milestone.desc}
        </p>
      </div>
    </div>
  );
}
