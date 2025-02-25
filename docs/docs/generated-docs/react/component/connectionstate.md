---
{
  "title": "ConnectionState",
  "linkToSource": "https://github.com/livekit/components-js/blob/main/packages/react/src/components/ConnectionState.tsx"
}
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# ConnectionState

The `ConnectionState` component displays the connection status of the room as strings (`"connected" | "connecting" | "disconnected" | "reconnecting"`<!-- -->).

## Import

```typescript
import { ConnectionState } from "@livekit/components-react";
```

## Usage

```tsx
<LiveKitRoom>
  <ConnectionState />
</LiveKitRoom>
```

{% partial file="p_usage.md" variables={exampleCount: 1} /%}

## Properties

{% parameter name="room" type="Room" optional=true %}
_(Optional)_ The room from which the connection status should be displayed.

{% /parameter %}
