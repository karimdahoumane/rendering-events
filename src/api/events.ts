import { IEvent } from 'src/types/event';
import fetchJson from 'src/utils/fetch';

export const getEvents = async (): Promise<IEvent[]> => {
  return fetchJson('input.json');
}
