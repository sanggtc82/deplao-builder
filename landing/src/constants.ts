// ──────────────────────────────────────────────────────────────
//  Landing page — Cấu hình dùng chung
//
//  ⚠️  Khi nâng cấp phiên bản, CHỈ CẦN SỬA APP_VERSION ở đây.
//  Tất cả nút tải xuống sẽ tự cập nhật URL.
// ──────────────────────────────────────────────────────────────

/** Phiên bản hiện tại — đồng bộ với package.json root */
export const APP_VERSION = '26.4.0';

/** Tên file installer — Windows */
export const DOWNLOAD_FILENAME = `Deplao-Setup-${APP_VERSION}.exe`;
export const DOWNLOAD_URL = `./file/${DOWNLOAD_FILENAME}`;

/** macOS — Apple Silicon (M1/M2/M3) */
export const DOWNLOAD_FILENAME_MAC_ARM64 = `Deplao-${APP_VERSION}-arm64.dmg`;
export const DOWNLOAD_URL_MAC_ARM64 = `./file/${DOWNLOAD_FILENAME_MAC_ARM64}`;

/** macOS — Intel (x64) */
export const DOWNLOAD_FILENAME_MAC_X64 = `Deplao-${APP_VERSION}.dmg`;
export const DOWNLOAD_URL_MAC_X64 = `./file/${DOWNLOAD_FILENAME_MAC_X64}`;

