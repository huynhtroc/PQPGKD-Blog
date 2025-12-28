export {};

declare global {
  interface Window {
    umami?: {
      track: (data?: {
        url?: string;
        referrer?: string;
        title?: string;
      }) => void;
    };
  }
}

