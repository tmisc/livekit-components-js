---
{
  "title": "VideoTrack",
  "linkToSource": "https://github.com/livekit/components-js/blob/main/packages/react/src/components/participant/VideoTrack.tsx"
}
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# VideoTrack

The `VideoTrack` component is responsible for rendering participant video tracks like `camera` and `screen_share`<!-- -->. This component must have access to the participant's context, or alternatively pass it a `Participant` as a property.

## Import

```typescript
import { VideoTrack } from "@livekit/components-react";
```

## Usage

```tsx
<VideoTrack trackRef={trackRef} />
```

{% partial file="p_usage.md" variables={exampleCount: 1} /%}

## Properties

{% parameter name="manageSubscription" type="boolean" optional=true %}
_(Optional)_

{% /parameter %}

{% parameter name="onSubscriptionStatusChanged" type="(subscribed: boolean) => void" optional=true %}
_(Optional)_

{% /parameter %}

{% parameter name="onTrackClick" type="(evt: ParticipantClickEvent) => void" optional=true %}
_(Optional)_

{% /parameter %}

{% parameter name="trackRef" type="TrackReference" optional=true %}
_(Optional)_ The track reference of the track to render.

{% /parameter %}

{% parameter name="name" type="string" optional=true deprecated=true %}
_(Optional)_

{% callout type="caution" variation="compact" %}
This property will be removed in a future version use `trackRef` instead.

{% /callout %}
{% /parameter %}

{% parameter name="participant" type="Participant" optional=true deprecated=true %}
_(Optional)_

{% callout type="caution" variation="compact" %}
This property will be removed in a future version use `trackRef` instead.

{% /callout %}
{% /parameter %}

{% parameter name="publication" type="TrackPublication" optional=true deprecated=true %}
_(Optional)_

{% callout type="caution" variation="compact" %}
This property will be removed in a future version use `trackRef` instead.

{% /callout %}
{% /parameter %}

{% parameter name="source" type="Track.Source" optional=true deprecated=true %}
_(Optional)_

{% callout type="caution" variation="compact" %}
This property will be removed in a future version use `trackRef` instead.

{% /callout %}
{% /parameter %}
