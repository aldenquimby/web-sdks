// ... existing code
import { ReactElement } from 'react';
import { Screens as RoomkitScreens } from '@100mslive/types-prebuilt';

export interface CustomSetting {
  tabName: string;
  title: string;
  icon: ReactElement;
  content: ReactElement;
}

export interface Screens extends RoomkitScreens {
  // ... other existing screen types
  settings?: {
    customSettings?: CustomSetting[];
  };
}
