export const COLORS = {
  accent: "#d0bcff",
  accentStrong: "#a078ff",
  accentDeep: "#6d3bd7",
  recovery: "#e6b34d",
  conflict: "#b39ddb",
  ink: "#e3e1ec",
} as const;

export type FeatureKey =
  | "conservation"
  | "markdown"
  | "history"
  | "sync"
  | "platforms";

export type FeatureConfig = {
  key: FeatureKey;
  color: string;
  colorRgb: string;
  gradientTo: string;
  bgTint: string;
  layout: "text-left" | "text-right";
};

export const FEATURES: FeatureConfig[] = [
  {
    key: "conservation",
    color: "#d0bcff",
    colorRgb: "208,188,255",
    gradientTo: "#a078ff",
    bgTint: "#12111c",
    layout: "text-left",
  },
  {
    key: "markdown",
    color: "#a078ff",
    colorRgb: "160,120,255",
    gradientTo: "#d0bcff",
    bgTint: "#11101a",
    layout: "text-right",
  },
  {
    key: "history",
    color: "#e6b34d",
    colorRgb: "230,179,77",
    gradientTo: "#d0bcff",
    bgTint: "#161206",
    layout: "text-left",
  },
  {
    key: "sync",
    color: "#b39ddb",
    colorRgb: "179,157,219",
    gradientTo: "#6d3bd7",
    bgTint: "#100f18",
    layout: "text-right",
  },
  {
    key: "platforms",
    color: "#d0bcff",
    colorRgb: "208,188,255",
    gradientTo: "#a078ff",
    bgTint: "#0f0f17",
    layout: "text-left",
  },
];

/* Secondary feature grid — smaller cards */
export const GRID_ITEMS = [
  { key: "autosave", iconName: "Save" },
  { key: "trash", iconName: "Trash2" },
  { key: "backup", iconName: "Archive" },
  { key: "find", iconName: "Search" },
  { key: "outline", iconName: "ListTree" },
  { key: "statistics", iconName: "BarChart3" },
  { key: "sprint", iconName: "Timer" },
  { key: "goal", iconName: "Target" },
  { key: "export", iconName: "FileOutput" },
  { key: "privacyLock", iconName: "Lock" },
  { key: "shortcuts", iconName: "Command" },
  { key: "typewriter", iconName: "AlignCenter" },
] as const;

export type PlatformKey = "ios" | "macos" | "harmony";

export const PLATFORMS: { key: PlatformKey; iconName: string }[] = [
  { key: "ios", iconName: "Smartphone" },
  { key: "macos", iconName: "Laptop" },
  { key: "harmony", iconName: "Tablet" },
];

/* Public links — update before launch. */
export const APP_STORE_URL = "https://apps.apple.com/app/neowriter";
export const APP_GALLERY_URL = "https://appgallery.huawei.com/app/neowriter";
export const SUPPORT_EMAIL = "neowriter@outlook.com";
// Matches the links used inside the NeoWriter app (PaywallViewController.swift).
export const PRIVACY_URL = "https://petrguan.github.io/neowriter-legal/";
export const TERMS_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
