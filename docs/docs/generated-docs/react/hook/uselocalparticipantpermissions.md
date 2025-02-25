---
{
  "title": "useLocalParticipantPermissions",
  "linkToSource": "https://github.com/livekit/components-js/blob/main/packages/react/src/hooks/useLocalParticipantPermissions.ts"
}
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# useLocalParticipantPermissions

The `useLocalParticipantPermissions` hook returns the local participant's permissions.

## Import

```typescript
import { useLocalParticipantPermissions } from "@livekit/components-react";
```

## Usage

```tsx
const { canPublish, canPublishData } = useLocalParticipantPermissions();
```

{% partial file="p_usage.md" variables={exampleCount: 1} /%}

## Returns

```typescript
import("livekit-client/dist/src/proto/livekit_models_pb").ParticipantPermission | undefined;
```
