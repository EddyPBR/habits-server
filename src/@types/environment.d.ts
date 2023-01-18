export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PREFIX: "http" | "https";
      HOST: string;
      PORT: number;
      DATABASE_URL: string;
    }
  }
}
