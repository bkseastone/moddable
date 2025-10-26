declare module "embedded:io/tcp/websocket" {
  type TypedArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Uint8ClampedArray
  | Float32Array
  | Float64Array

  type listenerEventData = {
    data?: string,
    code?: number,
    reason?: string,
    wasClean?: boolean,
    message?: string,
  }

  export default class WebSocket {
    constructor(url: string | {}, protocol?: string);
    close(code?: number, reason?: string): void;
    addEventListener(event: string, listener: (event: listenerEventData) => void): void;
    send(data: ArrayBuffer | DataView| TypedArray | string): void;
  }
}