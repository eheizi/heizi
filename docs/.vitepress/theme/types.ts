export interface NavLink {
  /** 站点图标 */
  icon?: string | { svg: string };
  /** 站点名称 */
  title: string;
  /** 站点名称 */
  desc?: string;
  /** 站点链接 */
  link: string;
  /** 徽章标注 */
  badge?: string;
}
export interface NavData {
  title: string;
  tag?: string;
  noIcon?: boolean;
  items: NavLink[];
}
