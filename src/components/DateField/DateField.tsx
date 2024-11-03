// Tremor DateField [v0.0.0]

"use client"

import * as React from "react"
import { createCalendar } from "@internationalized/date"
import {
  AriaDatePickerProps,
  DateValue,
  useDateField,
  useDateSegment,
  useLocale,
} from "react-aria"
import {
  DateFieldState,
  DateSegment as Segment,
  useDateFieldState,
} from "react-stately"
import { tv } from "tailwind-variants"

import { cx } from "../../utils/cx"
import { focusInput } from "../../utils/focusInput"
import { hasErrorInput } from "../../utils/hasErrorInput"

interface DateSegmentProps extends React.ComponentPropsWithoutRef<"div"> {
  segment: Segment
  state: DateFieldState
}

const DateSegment = ({ segment, state }: DateSegmentProps) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { segmentProps } = useDateSegment(segment, state, ref)

  const isComma = segment.type === "literal" && segment.text === ", "

  if (isComma) {
    return <span className="mx-1" />
  }

  return (
    <span>
      <div
        ref={ref}
        className={cx(
          "rounded px-1 tabular-nums outline-none transition",
          "focus-visible:bg-blue-500 focus-visible:text-white",
          {
            "uppercase text-gray-600 dark:text-gray-400": segment.isPlaceholder,
            "text-gray-600 dark:text-gray-400":
              !segment.isEditable && !state.value,
          },
        )}
        {...segmentProps}
      >
        {segment.text}
      </div>
    </span>
  )
}

const dateFieldStyles = tv({
  base: [
    // base
    "relative flex appearance-none items-center rounded-md border px-2.5 py-2 tabular-nums shadow-sm outline-none transition sm:text-sm",
    // border color
    "border-gray-300 dark:border-gray-800",

    "bg-white dark:bg-gray-950",
    // disabled
    "disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400",
    "disabled:dark:border-gray-700 disabled:dark:bg-gray-800 disabled:dark:text-gray-500",
    // focus
    focusInput,
    // invalid (optional)
    // "aria-[invalid=true]:dark:ring-red-400/20 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-200 aria-[invalid=true]:border-red-500 invalid:ring-2 invalid:ring-red-200 invalid:border-red-500"
  ],
  variants: {
    hasError: {
      true: hasErrorInput,
    },
  },
})

interface DatePickerFieldProps extends AriaDatePickerProps<DateValue> {
  hasError?: boolean
}

const DateField = ({ hasError, ...props }: DatePickerFieldProps) => {
  const { locale } = useLocale()

  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  })

  const ref = React.useRef<HTMLDivElement>(null)
  const { fieldProps } = useDateField(props, state, ref)

  return (
    <div
      ref={ref}
      aria-label="Date input"
      className={cx(dateFieldStyles({ hasError }))}
      {...fieldProps}
    >
      {state.segments.map((segment, index) => {
        return <DateSegment key={index} segment={segment} state={state} />
      })}
    </div>
  )
}

export { DateField }
