export interface Tag {
  name: string;
  count: number;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
}

export interface TagsResponse {
  items: Tag[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}
