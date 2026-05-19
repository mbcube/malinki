import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string | string[];
  categoryLabel?: string;
  answerLink?: string | null;
}

interface Props {
  items: FaqItem[];
}

export default function StudioFaqAccordion({ items }: Props) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <div key={i}>
          {item.categoryLabel && (
            <p className="text-[1.25rem] font-light uppercase tracking-widest text-white/50 pt-8 pb-2">
              {item.categoryLabel}
            </p>
          )}
          <AccordionPrimitive.Item
            value={`item-${i}`}
            className="border-b border-white/20"
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="group flex w-full items-start justify-between gap-8 py-8 text-left outline-none">
                <span className="text-[1.125rem] md:text-[1.25rem] font-medium leading-[1.2] text-white">
                  {item.question}
                </span>
                <ChevronDownIcon className="mt-0.5 size-6 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            {item.answer && (item.answer as string[]).length > 0 && (
              <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="flex flex-col gap-3 pb-8">
                  {Array.isArray(item.answer) ? (
                    item.answer.map((line, j) => (
                      <p
                        key={j}
                        className="text-[1rem] md:text-[1.125rem] font-light leading-[1.5] text-white/85"
                      >
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="text-[1rem] md:text-[1.125rem] font-light leading-[1.5] text-white/85">
                      {item.answer}
                    </p>
                  )}
                </div>
              </AccordionPrimitive.Content>
            )}
          </AccordionPrimitive.Item>
        </div>
      ))}
    </AccordionPrimitive.Root>
  );
}
