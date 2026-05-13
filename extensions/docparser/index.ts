import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

import { registerDoctorCommand } from "./doctor.ts";
import { registerDocumentParseTool } from "./tool.ts";

export default function parseDocumentExtension(pi: ExtensionAPI) {
  registerDocumentParseTool(pi);
  registerDoctorCommand(pi);
}
