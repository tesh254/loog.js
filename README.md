# loog.js

keep track of your events in one platform and have them tied to custom workflows from the dashboard

## Installation

```bash
npm install --save loog.js
```

## Usage

### Import Library

```javascript
import Loog from "loog.js";
```

### Initialize Client

```javascript
const loog = new Loog();

loog.init({
  clientID: "your client id", // check the settings section of your app
  publicKey: "your public key", // check the settings section of your app
});
```

### Send Event

```javascript
loog.emit({
  metadata: {
    is_test: true,
  },
  message: "This is a test message",
  event_channel: "#test-message",
  event_type: "event",
});
```
