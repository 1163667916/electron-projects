export type Champion = {
  ally_tips: string[];
  enemy_tips: string[];
  id: number;
  image_url: string;
  key: string;
  name: string;
  passive: {
    description: string;
    image_url: string;
    name: string;
    video_url: string;
  };
  spells: {
    key: string;
    cooldown_burn: [];
    cost_burn: number[];
    description: string;
    image_url: string;
    max_rank: number;
    name: string;
    range_burn: number[];
    tooltip: string;
    video_url: string;
  }[];
};
