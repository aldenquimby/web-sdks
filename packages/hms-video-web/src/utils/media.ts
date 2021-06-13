import { BuildGetMediaError, HMSGetMediaActions } from '../error/utils';

export async function getLocalStream(constraints: MediaStreamConstraints): Promise<MediaStream> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    return stream;
  } catch (err) {
    throw BuildGetMediaError(err, HMSGetMediaActions.AV);
  }
}

export async function getLocalScreen(constraints: MediaStreamConstraints['video']): Promise<MediaStream> {
  try {
    // @ts-ignore [https://github.com/microsoft/TypeScript/issues/33232]
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: constraints, audio: false });
    return stream;
  } catch (err) {
    throw BuildGetMediaError(err, HMSGetMediaActions.SCREEN);
  }
}

interface MediaDeviceGroups {
  audioinput: MediaDeviceInfo[];
  audiooutput: MediaDeviceInfo[];
  videoinput: MediaDeviceInfo[];
}

export async function getLocalDevices(): Promise<MediaDeviceGroups> {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const deviceGroups: MediaDeviceGroups = {
      audioinput: [],
      audiooutput: [],
      videoinput: [],
    };
    devices.forEach((device) => deviceGroups[device.kind].push(device));
    return deviceGroups;
  } catch (err) {
    throw BuildGetMediaError(err, HMSGetMediaActions.AV);
  }
}
