"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CheckCircle2, ChevronDown, ChevronRight, Circle } from "lucide-react";

/**
 * This component is now a Client Component to allow stateful interactivity.
 * Users can expand/collapse sections, check/uncheck items, and mark a section as complete.
 */
export default function RoadmapContent() {
  const topics = [
    {
      id: "1",
      title: "HTML & CSS Basics",
      description:
        "Start with the building blocks of the web. Learn HTML tags, CSS selectors, layouts, and build your first pages.",
      items: [
        { id: "1-1", label: "HTML tags & structure", type: "concept" },
        { id: "1-2", label: "Semantic HTML", type: "concept" },
        { id: "1-3", label: "CSS basics & selectors", type: "concept" },
      ],
    },
    {
      id: "2",
      title: "JavaScript Fundamentals",
      description:
        "Learn the language of the web. Master variables, functions, arrays, and control flow.",
      items: [
        { id: "2-1", label: "Variables & data types", type: "concept" },
        { id: "2-2", label: "Functions & control flow", type: "concept" },
        { id: "2-3", label: "DOM manipulation", type: "concept" },
      ],
    },
  ];

  const itemTypeMeta: Record<string, { label: string; color: string }> = {
    concept: {
      label: "Concept",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    project: {
      label: "Project",
      color: "bg-[#c7f238]/10 text-green-700 border-[#c7f238]/40",
    },
    tool: {
      label: "Tool",
      color: "bg-orange-50 text-orange-700 border-orange-200",
    },
  };

  // Interactive state: openSections, checked
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(["1"]));
  const [checked, setChecked] = useState<Set<string>>(new Set(["1-2"]));

  const handleSectionToggle = (sectionId: string) => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const handleItemToggle = (itemId: string) => {
    setChecked((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleMarkSectionComplete = (topic: (typeof topics)[number]) => {
    setChecked((prev) => {
      const newSet = new Set(prev);
      for (const item of topic.items) {
        newSet.add(item.id);
      }
      return newSet;
    });
  };

  return (
    <>
      <div className="space-y-3">
        {topics.map((topic, index) => {
          const isOpen = openSections.has(topic.id);
          const sectionChecked = topic.items.filter((i) =>
            checked.has(i.id),
          ).length;
          const sectionTotal = topic.items.length;
          const sectionComplete = sectionChecked === sectionTotal;

          return (
            <Collapsible
              key={topic.id}
              open={isOpen}
              onOpenChange={() => handleSectionToggle(topic.id)}
            >
              <div
                className={`rounded-2xl border transition-colors ${
                  sectionComplete
                    ? "border-[#c7f238]/40 bg-[#c7f238]/5"
                    : "border-border bg-card"
                }`}
              >
                {/* Section header */}
                <CollapsibleTrigger asChild>
                  <button
                    className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-muted/40 rounded-2xl transition-colors"
                    type="button"
                  >
                    {/* Step number */}
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold border-2 transition-colors ${
                        sectionComplete
                          ? "border-[#c7f238] bg-[#c7f238] text-gray-900"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {sectionComplete ? (
                        <CheckCircle2 className="size-4" />
                      ) : (
                        index + 1
                      )}
                    </span>

                    {/* Title + meta */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold">
                          {topic.title}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {sectionChecked}/{sectionTotal}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                        {topic.description}
                      </p>
                    </div>

                    {/* Chevron */}
                    {isOpen ? (
                      <ChevronDown className="size-4 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronRight className="size-4 text-muted-foreground shrink-0" />
                    )}
                  </button>
                </CollapsibleTrigger>

                {/* Section content */}
                <CollapsibleContent>
                  <div className="px-5 pb-4 pt-1 space-y-1 border-t border-border/50">
                    {topic.items.map((item) => {
                      const isChecked = checked.has(item.id);
                      const typeMeta = itemTypeMeta[item.type];

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleItemToggle(item.id)}
                          className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-muted/50 ${
                            isChecked ? "opacity-60" : ""
                          }`}
                          aria-pressed={isChecked}
                        >
                          {/* Checkbox icon */}
                          {isChecked ? (
                            <CheckCircle2 className="size-4 shrink-0 text-green-600" />
                          ) : (
                            <Circle className="size-4 shrink-0 text-muted-foreground/40" />
                          )}

                          {/* Label */}
                          <span
                            className={`flex-1 text-sm ${
                              isChecked
                                ? "line-through text-muted-foreground"
                                : "text-foreground"
                            }`}
                          >
                            {item.label}
                          </span>

                          {/* Type badge */}
                          <span
                            className={`hidden sm:inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium shrink-0 ${typeMeta.color}`}
                          >
                            {typeMeta.label}
                          </span>
                        </button>
                      );
                    })}

                    {/* Mark section complete CTA */}
                    {!sectionComplete && (
                      <div className="pt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs text-muted-foreground hover:text-foreground gap-1.5"
                          onClick={() => handleMarkSectionComplete(topic)}
                        >
                          <CheckCircle2 className="size-3.5" />
                          Mark all as complete
                        </Button>
                      </div>
                    )}
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          );
        })}
      </div>
    </>
  );
}
