# Make your own window layout

In this first tutorial, let's create a custom windows layout.

## Step by step

### Configure the viewer

We first create a viewer with a specific configuration:
- Remove the header to be focused on the main content (the windows !).
- Add BIMData API demo ids to load a model.
- Disable some plugins to clean the "3d" window and simplify the example.

```javascript
const viewer = makeBIMDataViewer({
  ui: {
    headerVisible: false,
  },
  api: {
    ifcIds: [15097],
    cloudId: 10344,
    projectId: 237466,
    accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
  },
  plugins: {
    bcf: false,
    "structure-properties": false,
    fullscreen: false,
    section: false,
    search: false,
    projection: false,
  }
});
```

### Create and register windows

Then we register two windows named "window1" and "window2":

```javascript
const window1 = {
  name: "window1",
  plugins: [],
};

const window2 = {
  name: "window2",
  plugins: [],
};

viewer.registerWindow(window1);
viewer.registerWindow(window2);
```

::: tip
Note that this windows are without any plugins for now.
:::

### Create custom layout and mount the viewer

Finally, we create a custom layout and mount the viewer into the DOM using the `mount` method. Our layout is a three windows part layout :

- One "3d" native window on the left.
- Our two custom windows on the right, with "window1" on top on "window2".

```javascript
const customLayout = {
  ratios: [40, 60],
  children: [
    "3d",
    {
      ratios: [50, 50],
      direction: "column",
      children: ["window1", "window2"],
    },
  ],
};

viewer.mount("#viewerId", customLayout);
```

::: warning
`viewerId` must be the id of a valid HTML element (typically a `<div>` element).
:::

## Resulting viewer

<ClientOnly>
  <BIMDataViewer config="windowUI"/>
</ClientOnly>

## Complete code example

```javascript
// Configure the viewer
const viewer = makeBIMDataViewer({
  ui: {
    headerVisible: false,
  },
  api: {
    ifcIds: [15097],
    cloudId: 10344,
    projectId: 237466,
    accessToken: "TAbdyPzoQeYgVSMe4GUKoCEfYctVhcwJ",
  },
  plugins: {
    bcf: false,
    "structure-properties": false,
    fullscreen: false,
    section: false,
    search: false,
    projection: false,
  }
});

// Create and register windows
const window1 = {
  name: "window1",
  plugins: [],
};

const window2 = {
  name: "window2",
  plugins: [],
};

viewer.registerWindow(window1);
viewer.registerWindow(window2);

// Mount custom layout
const customLayout = {
  ratios: [40, 60],
  children: [
    "3d",
    {
      ratios: [50, 50],
      direction: "column",
      children: ["window1", "window2"],
    },
  ],
};

viewer.mount("#viewerId", customLayout);
```
