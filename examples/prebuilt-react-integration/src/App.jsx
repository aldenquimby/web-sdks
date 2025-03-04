import { HMSPrebuilt, Diagnostics } from '@100mslive/roomkit-react';
import { getRoomCodeFromUrl } from './utils';
import { SettingsIcon } from '@100mslive/react-icons';

const MyCustomSettings = () => {
  return (
    <div>
      <h3>Custom Settings Section</h3>
      <p>This is my custom settings section</p>
    </div>
  );
};

export default function App() {
  const roomCode = getRoomCodeFromUrl();
  const isDiagnostics = location.pathname.startsWith('/diagnostics');

  if (isDiagnostics) {
    return <Diagnostics />;
  }

  return (
    <HMSPrebuilt
      roomCode={roomCode}
      screens={{
        settings: {
          customSettings: [
            {
              tabName: 'custom-tab',
              title: 'Custom Settings',
              icon: SettingsIcon,
              content: MyCustomSettings,
            },
          ],
        },
      }}
    />
  );
}
