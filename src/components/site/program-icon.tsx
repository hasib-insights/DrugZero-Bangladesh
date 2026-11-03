import type { LucideIcon } from "lucide-react";
import { BookOpen, HeartHandshake, Megaphone, Users } from "lucide-react";

/** Registry so content files can reference icons by name (no dynamic imports). */
const registry: Record<string, LucideIcon> = {
  Megaphone,
  Users,
  BookOpen,
  HeartHandshake,
};

export function ProgramIcon({
  name,
  className = "size-5",
}: {
  name: string;
  className?: string;
}) {
  const Icon = registry[name] ?? Megaphone;
  return <Icon className={className} aria-hidden="true" />;
}
