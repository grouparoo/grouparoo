export interface GrouparooEntity {
  id: string;
  name: string;
}

export interface GrouparooApp extends GrouparooEntity {}
export interface GrouparooModel extends GrouparooEntity {}
export interface GrouparooSource extends GrouparooEntity {}
export interface Property extends GrouparooEntity {}
export interface GrouparooSchedule extends GrouparooEntity {}
export interface GrouparooGroup extends GrouparooEntity {}
export interface GrouparooDestination extends GrouparooEntity {}
