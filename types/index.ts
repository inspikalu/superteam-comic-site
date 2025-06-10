export interface Milestone {
  chapter: string
  date: string
  title: string
  desc: string
  visual: string
}

export interface HeaderProps {
  onScrollToTimeline: () => void
}

export interface MilestonePanelProps {
  milestone: Milestone
  index: number
}
