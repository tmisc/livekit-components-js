---
{
  "title": "useDataChannel",
  "linkToSource": "https://github.com/livekit/components-js/blob/main/packages/react/src/hooks/useDataChannel.ts"
}
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# useDataChannel

The `useDataChannel` hook returns the ability to send and receive messages.

## Import

```typescript
import { useDataChannel } from "@livekit/components-react";
```

## Remarks

There is only one data channel. Passing a `topic` does not open a new data channel. It is only used to filter out messages with no or a different `topic`<!-- -->.

## Usage

```tsx
// Send messages to all participants
const { message, send } = useDataChannel(callback);
```

{% partial file="p_usage.md" variables={exampleCount: 1} /%}

## Properties

{% parameter name="onMessage" type="(msg: ReceivedDataMessage) => void" optional=true %}
{% /parameter %}

## Returns

```typescript
UseDataChannelReturnType;
```
