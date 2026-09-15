"use client";

import { Calendar, DateField, DatePicker, DateValue } from "@heroui/react";
import { CalendarDaysIcon, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

export default function FlightDatePicker() {
  const [date, setDate] = useState<DateValue | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  return (
    <DatePicker
      value={date}
      onChange={setDate}
      aria-label="Flight date picker"
      className="w-full flex-1"
    >
      <DateField.Group
        onClick={() => triggerRef.current?.click()}
        className="border-gray-3 h-14 cursor-pointer justify-between rounded-lg border px-1 shadow-none md:h-12"
      >
        {!date ? (
          <div className="text-gray-8 mr-2 w-full max-md:font-medium">
            تاریخ رفت
          </div>
        ) : (
          <div className="text-gray-8 mr-2">
            {`${String(date.day).padStart(2, "0")} / ${String(date.month).padStart(2, "0")} / ${date.year}`}
          </div>
        )}
        <DateField.Suffix>
          <DatePicker.Trigger ref={triggerRef}>
            <DatePicker.TriggerIndicator className="text-gray-8 size-5">
              <ChevronDown size={18} className="md:hidden" />
              {date ? (
                <CalendarDaysIcon
                  size={16}
                  className="cursor-pointer max-md:hidden"
                />
              ) : null}
            </DatePicker.TriggerIndicator>
          </DatePicker.Trigger>
        </DateField.Suffix>
      </DateField.Group>
      <DatePicker.Popover className="max-w-none">
        <Calendar className="ml-13" aria-label="Flight date">
          <Calendar.Header>
            <Calendar.YearPickerTrigger>
              <Calendar.YearPickerTriggerHeading />
              <Calendar.YearPickerTriggerIndicator />
            </Calendar.YearPickerTrigger>
            <Calendar.NavButton slot="next" />
            <Calendar.NavButton slot="previous" />
          </Calendar.Header>
          <Calendar.Grid>
            <Calendar.GridHeader>
              {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
            </Calendar.GridHeader>
            <Calendar.GridBody>
              {(date) => <Calendar.Cell date={date} />}
            </Calendar.GridBody>
          </Calendar.Grid>
          <Calendar.YearPickerGrid>
            <Calendar.YearPickerGridBody>
              {({ year }) => <Calendar.YearPickerCell year={year} />}
            </Calendar.YearPickerGridBody>
          </Calendar.YearPickerGrid>
        </Calendar>
      </DatePicker.Popover>
    </DatePicker>
  );
}
