export interface TaskModel {
  id: number;
  user_id: number;
  name: string;
  description: string;
  end_date?: string;
  is_done: boolean;
  category_id?: number;
  category?: string;
  color?: string;
}
