---
{
  "title": "useMediaDeviceSelect",
  "linkToSource": "https://github.com/livekit/components-js/blob/main/packages/react/src/hooks/useMediaDeviceSelect.ts"
}
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# useMediaDeviceSelect

The `useMediaDeviceSelect` hook is used to implement the `MediaDeviceSelect` component and returns o.a. the list of devices of a given kind (audioinput or videoinput), the currently active device and a function to set the the active device.

## Import

```typescript
import { useMediaDeviceSelect } from "@livekit/components-react";
```

## Usage

```tsx
const { devices, activeDeviceId, setActiveMediaDevice } = useMediaDeviceSelect({
  kind: "audioinput"
});
```

{% partial file="p_usage.md" variables={exampleCount: 1} /%}

## Properties

{% parameter name="kind" type="MediaDeviceKind" optional=false %}
{% /parameter %}

{% parameter name="requestPermissions" type="boolean" optional=true %}
this will call getUserMedia if the permissions are not yet given to enumerate the devices with device labels. in some browsers multiple calls to getUserMedia result in multiple permission prompts. It's generally advised only flip this to true, once a (preview) track has been acquired successfully with the appropriate permissions.

{% /parameter %}

{% parameter name="room" type="Room" optional=true %}
{% /parameter %}

{% parameter name="track" type="LocalAudioTrack | LocalVideoTrack" optional=true %}
{% /parameter %}

## Returns

```typescript
{
    devices: MediaDeviceInfo[];
    className: string;
    activeDeviceId: string;
    setActiveMediaDevice: (id: string, options?: import("@livekit/components-core").SetMediaDeviceOptions | undefined) => Promise<void>;
}
```
