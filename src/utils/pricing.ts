import { PRICING_LAST_CHECKED, toolPricing } from '../data/tool-pricing';
import type { ToolPricing } from '../types/tool';

export { PRICING_LAST_CHECKED };

export function getToolPricing(toolName: string): ToolPricing | undefined {
  return toolPricing[toolName];
}
