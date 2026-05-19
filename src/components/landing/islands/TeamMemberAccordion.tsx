import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface TeamMember {
  id: string;
  name: string;
  nameLine1?: string;
  nameLine2?: string;
  role: string;
  imageUrl: string;
  linkedinUrl: string;
  hasSplitName: boolean;
}

interface TeamMemberAccordionProps {
  members: TeamMember[];
}

export function TeamMemberAccordion({ members }: TeamMemberAccordionProps) {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  return (
    <div className="flex flex-col w-full">
      <Accordion
        type="single"
        collapsible
        value={openItem}
        onValueChange={setOpenItem}
      >
        {members.map((member) => (
          <AccordionItem
            key={member.id}
            value={member.id}
            className="border-[#083D45] border-[0px_0px_1px] border-solid"
          >
            <AccordionTrigger className="hover:no-underline py-8 px-4 group">
              <div className="flex flex-col gap-4 items-start">
                <h3 className="p-0 font-['Montserrat'] text-[24px] md:text-[32px] font-bold leading-none uppercase text-[#083D45] text-left">
                  {member.hasSplitName ? (
                    <>
                      {member.nameLine1}
                      <br />
                      {member.nameLine2}
                    </>
                  ) : (
                    member.name
                  )}
                </h3>
                <p className="m-0 font-['Montserrat'] text-[16px] font-medium leading-[1.2] text-[#083D45] text-left">
                  {member.role}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-8">
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col gap-4">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </a>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
