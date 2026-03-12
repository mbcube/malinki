import { useState, useMemo } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Collapsible,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { X, Search, ChevronDown } from "lucide-react"

export type EquipmentItem = {
  name: string
  qty: string
  dept: string
  price: string
  description: string
}

interface Props {
  label: string
  title: string
  colName: string
  colQty: string
  colDept: string
  colPrice: string
  colDescription: string
  filterLabel?: string
  data?: EquipmentItem[]
}

function EquipmentRow({ item }: { item: EquipmentItem }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow
        onClick={() => item.description && setOpen((o) => !o)}
        className={`border-b border-[#083D45]/5 hover:bg-[#083D45]/3 transition-colors ${item.description ? "cursor-pointer md:cursor-default" : ""}`}
      >
        <TableCell className="px-6 py-3 font-['Montserrat'] text-[13px] font-medium text-[#083D45] whitespace-normal break-words">
          <span className="flex items-center justify-between gap-2">
            {item.name}
            {item.description && (
              <ChevronDown
                className={`md:hidden shrink-0 size-3.5 text-[#083D45]/50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            )}
          </span>
        </TableCell>
        <TableCell className="px-3 py-3 font-['Montserrat'] text-[13px] text-[#083D45] w-px whitespace-nowrap">
          {item.qty}
        </TableCell>
        <TableCell className="px-3 py-3 hidden sm:table-cell w-px whitespace-nowrap">
          {item.dept && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-['Montserrat'] font-semibold text-[#083D45] bg-[#083D45]/8 border border-[#083D45]/10">
              {item.dept}
            </span>
          )}
        </TableCell>
        <TableCell className="px-3 py-3 font-['Montserrat'] text-[13px] font-medium text-[#083D45] w-px whitespace-nowrap">
          {item.price}
        </TableCell>
        <TableCell className="hidden md:table-cell px-3 py-3 font-['Montserrat'] text-[12px] text-[#083D45] whitespace-normal break-words max-w-xs">
          {item.description}
        </TableCell>
      </TableRow>
      {item.description && (
        <TableRow className="md:hidden border-b border-[#083D45]/10">
          <TableCell colSpan={4} className="px-6 pb-0 pt-0">
            <Collapsible open={open}>
              <CollapsibleContent>
                <div className="w-1/2 font-['Montserrat'] text-[12px] text-[#083D45] whitespace-normal pb-3">
                  {item.description}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

export default function EquipmentDrawer({
  label,
  title,
  colName,
  colQty,
  colDept,
  colPrice,
  colDescription,
  filterLabel = "",
  data = [],
}: Props) {
  const [search, setSearch] = useState("")
  const [activeDepts, setActiveDepts] = useState<string[]>([])

  const depts = useMemo(
    () => Array.from(new Set(data.map((d) => d.dept).filter(Boolean))).sort(),
    [data]
  )

  const filtered = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
      const matchesDept = activeDepts.length === 0 || activeDepts.includes(item.dept)
      return matchesSearch && matchesDept
    })
  }, [data, search, activeDepts])

  function toggleDept(dept: string) {
    setActiveDepts((prev) =>
      prev.includes(dept) ? prev.filter((d) => d !== dept) : [...prev, dept]
    )
  }

  return (
    <Drawer direction="bottom" >
      <DrawerTrigger asChild>
        <button className="font-['Montserrat'] text-[16px] font-semibold leading-none text-white underline underline-offset-4 hover:text-white/70 transition-colors cursor-pointer">
          {label}
        </button>
      </DrawerTrigger>
      <DrawerContent>
        {/* Header */}
        <DrawerHeader className="w-full max-w-350  mx-auto flex flex-row items-center justify-between px-6 py-4 border-b border-[#083D45]/10">
          <DrawerTitle className="font-['Montserrat'] text-[1.25rem] font-bold leading-none uppercase text-[#083D45]">
            {title}
          </DrawerTitle>
          <DrawerClose className="rounded-full p-1.5 hover:bg-[#083D45]/5 transition-colors">
            <X className="size-4 text-[#083D45]" />
          </DrawerClose>
        </DrawerHeader>

        {/* Toolbar */}
        <div className="w-full max-w-350  mx-auto flex items-center gap-3 px-6 py-3 border-b border-[#083D45]/10">
          <div className="relative flex-1 max-w-xs">
            {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#083D45]" /> */}
            {/* <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={colName + "..."}
              className="w-full pl-8 pr-3 py-1.5 text-[13px] font-['Montserrat'] font-medium text-[#083D45] placeholder:text-[#083D45]/40 bg-transparent border border-[#083D45]/30 rounded-md outline-none focus:border-[#083D45] transition-colors"
            /> */}
          </div>

          {depts.length > 0 && (
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-['Montserrat'] font-medium text-[#083D45] uppercase tracking-wide">
                {filterLabel}
              </span>
              {depts.map((dept) => {
                const active = activeDepts.includes(dept)
                return (
                  <button
                    key={dept}
                    onClick={() => toggleDept(dept)}
                    className={`px-2.5 py-1 rounded-full text-[11px] font-['Montserrat'] font-semibold leading-none transition-colors border ${
                      active
                        ? "bg-[#083D45] text-white border-[#083D45]"
                        : "bg-transparent text-[#083D45] border-[#083D45]/30 hover:border-[#083D45]"
                    }`}
                  >
                    {dept}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Table */}
        <div className="flex-1 overflow-y-auto w-full max-w-350  mx-auto">
          <Table className="table-auto  w-full">
            <TableHeader className=" ">
              <TableRow className="border-b border-[#083D45]/10 hover:bg-transparent ">
                <TableHead className="px-6 py-3 font-['Montserrat'] text-[11px] font-semibold uppercase tracking-tight text-[#083D45] whitespace-normal break-words">
                  {colName}
                </TableHead>
                <TableHead className="px-3 py-3 font-['Montserrat'] text-[11px] font-semibold uppercase tracking-wide text-[#083D45] w-px whitespace-nowrap">
                  {colQty}
                </TableHead>
                <TableHead className="px-3 py-3 font-['Montserrat'] text-[11px] font-semibold uppercase tracking-wide text-[#083D45] hidden sm:table-cell w-px whitespace-nowrap">
                  {colDept}
                </TableHead>
                <TableHead className="px-3 py-3 font-['Montserrat'] text-[11px] font-semibold uppercase tracking-wide text-[#083D45] w-px whitespace-nowrap">
                  {colPrice}
                </TableHead>
                <TableHead className="hidden md:table-cell px-3 py-3 font-['Montserrat'] text-[11px] font-semibold uppercase tracking-wide text-[#083D45] w-1/3">
                  {colDescription}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className=" ">
              {filtered.length ? (
                filtered.map((item, i) => (
                  <EquipmentRow key={i} item={item} />
                ))
              ) : (
                <TableRow className=" ">
                  <TableCell
                    colSpan={5}
                    className="h-32 text-center font-['Montserrat'] text-[13px] text-[#083D45]"
                  >
                    {data.length ? "No results" : "—"}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Footer count */}
        {data.length > 0 && (
          <div className="w-full max-w-350  mx-auto px-6 py-3 border-t border-[#083D45]/10">
            <p className="text-[11px] font-['Montserrat'] font-medium text-[#083D45]">
              {filtered.length} / {data.length}
            </p>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  )
}
