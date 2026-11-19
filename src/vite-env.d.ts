/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAIL_FORMSPREE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
