interface BuildOptions {
  code: string;
  contents?: string; // TODO: deprecate with “code“
  filePath: string;
  isDev: boolean;
}

/** map of extensions -> code (e.g. { ".js": "[code]", ".css": "[code]" }) */
type BuildResult = string | {[fileExtension: string]: string};

interface BundleOptions {
  srcDirectory: string;
  destDirectory: string;
  jsFilePaths: Set<string>;
  log: (msg, level?: 'INFO' | 'WARN' | 'ERROR') => void;
}

/** DEPRECATED */
interface TransformOptions {
  contents: string;
  urlPath: string;
  isDev: boolean;
}

interface SnowpackPlugin {
  /** file extensions this plugin takes as input (e.g. [".jsx", ".js", …]) */
  input: string | string[];
  /** file extensions this plugin outputs (e.g. [".js", ".css"]) */
  output: string | string[];
  build?(BuildOptions): Promise<BuildResult>;
  bundle?(BundleOptions): Promise<void>;
  transform?(TransformOptions): Promise<string>; // DEPRECATED
}
