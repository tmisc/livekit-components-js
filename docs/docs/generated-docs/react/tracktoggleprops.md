---
{
  "title": "TrackToggleProps interface",
  "linkToSource": "https://github.com/livekit/components-js/blob/main/packages/react/src/components/controls/TrackToggle.tsx"
}
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# TrackToggleProps interface

**Signature:**

```typescript
export interface TrackToggleProps<T extends ToggleSource> extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>
```

**Extends:** Omit&lt;React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt;, 'onChange'&gt;

{% partial file="p_usage.md" variables={exampleCount: 0} /%}

## Properties

| Property                                                      | Type                                                                        | Description  |
| ------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------ |
| [captureOptions?](./react/tracktoggleprops.captureoptions.md) | [CaptureOptionsBySource](./core/captureoptionsbysource.md)<!-- -->&lt;T&gt; | _(Optional)_ |
| [initialState?](./react/tracktoggleprops.initialstate.md)     | boolean                                                                     | _(Optional)_ |
| [onChange?](./react/tracktoggleprops.onchange.md)             | (enabled: boolean) =&gt; void                                               | _(Optional)_ |
| [showIcon?](./react/tracktoggleprops.showicon.md)             | boolean                                                                     | _(Optional)_ |
| [source](./react/tracktoggleprops.source.md)                  | T                                                                           |              |
