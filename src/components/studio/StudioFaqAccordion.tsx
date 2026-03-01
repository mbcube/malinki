import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
}

export default function StudioFaqAccordion({ items }: Props) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionPrimitive.Item
          key={i}
          value={`item-${i}`}
          className="border-b border-white/20"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="group flex w-full items-start justify-between gap-8 py-8 text-left outline-none">
              <span className="text-[1.125rem] md:text-[1.25rem] font-bold leading-[1.2] text-white">
                {item.question}
              </span>
              <ChevronDownIcon className="mt-0.5 size-6 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          {item.answer && (
            <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              <p className="text-[1.125rem] md:text-[1.25rem] font-medium leading-[1.2] text-white pb-8">
                {item.answer}
              </p>
            </AccordionPrimitive.Content>
          )}
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
