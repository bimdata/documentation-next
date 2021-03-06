# Overview

BIMData API is a tool to interact with your models stored on BIMData’s servers. Once your account on BIMData Connect is created, you can:

- Create and manage clouds
- Create and manage projects
- Upload IFC files
- Request data from clouds, projects, and models

![all API features](/assets/img/api/API-features.png)

## APIs

BIMData API is composed of five APIs:

### IFC API

- Upload Models
- Retrieve and update Model’s data in real-time
- We support the following implementations:
  - IFC Spacial Structure
  - IFC Zones
  - IFC Classifications
  - IFC Systems
  - IFC Layers
  - IFC Properties and PropertySets
- 3D models throught [glTF format](https://www.khronos.org/gltf/)

### BCF API
- Create BCF
- Share BCFs with other services
- Build a complete automated error management flow
- We implement the [BCF 2.1 API](https://github.com/buildingSMART/BCF-API) defined by BuildingSMART

### Collaboration API
- Create clouds and projects
- Invite users
- Manage their rights
- Share models, data and documents

### Checker API
- Validate your Models

### Single Sign-On (SSO) API
- Log in on desktop, tablet, mobile
- Log in all your BIM Services through BIMData Connect: [https://connect.bimdata.io](https://connect.bimdata.io)
- Log in through your own SSO (OpenID Connect or SAMLv2)

<div style="text-align: center;">
  <img src="/assets/img/api/API-organisation.png" width="350">
</div>

## General Principles

BIMData API follows these general principles:

- All API access is over HTTPS

- All non-binary data is sent and received as JSON

- Errors are sent using standard HTTP response codes (400, 403, 404)

- Actions are indicated by HTTP verbs: GET, POST, PUT, PATCH, DELETE

::: warning
Calls made over plain HTTP will respond a 302, redirecting to the same URL over HTTPS.
:::

The API Endpoint is: [https://api.bimdata.io](https://api.bimdata.io)

## OpenID

BIMData API uses the OpenID Connect protocol (technically very similar to the OAuth2 protocol). Any OpenID library you may find online to help you implement the protocol also works with BIMData API.
