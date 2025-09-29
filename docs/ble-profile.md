ReactionX / Metis BLE Profile (Working Notes)

- Primary Service (default): 0000fff0-0000-1000-8000-00805f9b34fb
- Characteristics (defaults; overridable via QR payload):
  - FFF1 writeCmd: 0000fff1-0000-1000-8000-00805f9b34fb
  - FFF2 notifyEvent: 0000fff2-0000-1000-8000-00805f9b34fb
  - FFF3 configSync (optional): 0000fff3-0000-1000-8000-00805f9b34fb
  - FFF4 battery (optional): 0000fff4-0000-1000-8000-00805f9b34fb
  - FFF5 ota/dfu (optional): 0000fff5-0000-1000-8000-00805f9b34fb

Command payload (FFF1)
- Packed bytes (little-endian where applicable):
  - [MODE_ID][NUM_LAMPS][COLOUR_CODES...][DELAY_MIN][DELAY_MAX][TIMEOUT]
  - MODE_ID: 1 byte — app-defined mode mapping (TBD from APK)
  - NUM_LAMPS: 1 byte (1–12)
  - COLOUR_CODES: N bytes — palette indices or RGB presets per OEM (TBD)
  - DELAY_MIN / DELAY_MAX: hundredths of a second (1–2 bytes)
  - TIMEOUT: seconds or ms per mode (1–2 bytes)

Notifications (FFF2)
- [HIT_ID][TIMESTAMP][PLAYER_ID?][MODE_FLAG?]
- Real-time events; subscribe and parse in bridge.

QR payload (final)
- {"version":"0.2.0","type":"reactionx-config","uuids":{"service":"0000fff0-0000-1000-8000-00805f9b34fb","writeCmd":"0000fff1-0000-1000-8000-00805f9b34fb","notifyEvent":"0000fff2-0000-1000-8000-00805f9b34fb"},"config":{...},"packed":"<hex bytes>"}
- Bridge prefers packed; otherwise compute from config using packing rules.

Sources & certainty (to be confirmed)
- Client Characteristic Configuration descriptor UUID 00002902-... confirmed in `ReactionX_Metis_Extract/smali_classes2/it/innove/Peripheral.smali` (static field and usage).
- FFF0/FFF1/FFF2 values currently defaults based on OEM patterns; targeted smali/JS extraction in progress to capture authoritative constants with exact file/line references.


