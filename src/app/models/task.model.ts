import {ID} from '@datorama/akita';

export interface TaskModel {
  id: ID;
  user_id: number;
  name: string;
  description: string;
  end_date?: string;
  is_done: boolean;
  category_id?: ID;
  category?: string;
  color?: string;
}
