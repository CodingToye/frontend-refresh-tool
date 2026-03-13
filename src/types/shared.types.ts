export type Topic = {
  name: string;
  summary: string;
  code?: string;
  interview?: boolean;
};

export type CheckedTopics = Record<string, boolean>;

export type Section = {
  title: string;
  items: Topic[];
};
